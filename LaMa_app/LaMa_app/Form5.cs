using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace LaMa_app
{
    public partial class Form5 : Form
    {
        public int ssz;
        public string nevA;
        public int megye_id;
        public int vezeto;

        public Form5(int ssz, string nevA, int megye_id, int vezeto)
        {
            InitializeComponent();

            this.ssz = ssz;
            this.nevA = nevA;
            this.megye_id = megye_id;
            this.vezeto = vezeto;
        }

        private void button4_Click(object sender, EventArgs e)
        {

            int sszM = Convert.ToInt32(sszMTB.Text);
            string nevM = nevMTB.Text;
            int megyeM = megyeMCB.SelectedIndex;
            int vezetoM = Convert.ToInt32(vezetoMCB.SelectedItem.ToString());

            string connStr = "server=localhost;user=root;database=lamafelhasznalok;port=3306";

            MySqlConnection conn = new MySqlConnection(connStr);

            conn.Open();

            string sql = "update allomasok set sorszam = " + sszM + ", nev = '" + nevM + "', megye_id = " + megyeM + ", vezeto = " + vezetoM + " WHERE nev = '" + nevA + "'";

            MySqlCommand cmd = new MySqlCommand(sql, conn);

            cmd.ExecuteNonQuery();

            conn.Close();

            sszMTB.Text = "";
            nevMTB.Text = "";
            megyeMCB.SelectedIndex = 0;
            vezetoMCB.SelectedIndex = 0;

        }

        private void Form5_Load(object sender, EventArgs e)
        {
            string connStr = "server=localhost;user=root;database=lamafelhasznalok;port=3306";

            MySqlConnection conn = new MySqlConnection(connStr);
            try
            {
                megyeMCB.Items.Clear();
                megyeMCB.Items.Add("");

                conn.Open();

                string sql = "select * from megyek";

                MySqlCommand cmd = new MySqlCommand(sql, conn);

                MySqlDataReader rdr = cmd.ExecuteReader();

                string elem = "";

                while (rdr.Read())
                {
                    string ssz = Convert.ToString(rdr[0]);
                    string nev = Convert.ToString(rdr[1]);

                    elem = ssz + " - " + nev;

                    megyeMCB.Items.Add(elem);
                }

                rdr.Close();

                vezetoMCB.Items.Clear();
                vezetoMCB.Items.Add("");

                string sql_vezeto = "select * from users";

                MySqlCommand cmd_vezeto = new MySqlCommand(sql_vezeto, conn);

                MySqlDataReader rdr_vezeto = cmd_vezeto.ExecuteReader();

                while (rdr_vezeto.Read())
                {
                    string ivir = Convert.ToString(rdr_vezeto[0]);

                    vezetoMCB.Items.Add(ivir);
                }

                rdr_vezeto.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }

            conn.Close();

            megyeMCB.SelectedIndex = megye_id;
            nevMTB.Text = nevA;
            sszMTB.Text = Convert.ToString(ssz);
            int index = 0;
            for (int i = 0;i < vezetoMCB.Items.Count;i++) {
                if (vezetoMCB.Items[i].ToString() == Convert.ToString(vezeto)) {
                    index = i;
                }
            }
            vezetoMCB.SelectedIndex = index;
        }
    }
}
