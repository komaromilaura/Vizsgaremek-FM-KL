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
    public partial class Form6 : Form
    {
        public string mk;
        public int aber;
        public Form6(string mk, int aber)
        {
            InitializeComponent();
            this.mk = mk;
            this.aber = aber;
        }
//Munkakör módosítás
        private void munkakorokMRB_Click(object sender, EventArgs e)
        {
            try
            {
                string mkM = Convert.ToString(munkakorMTB.Text);
                int aberM = Convert.ToInt32(alapberMTB.Text);

                string connStr = "server=localhost;user=root;database=lamafelhasznalok;port=3306";

                MySqlConnection conn = new MySqlConnection(connStr);

                conn.Open();

                string sql = "update munkakorok set munkakor = '" + mkM + "', alapber = " + aberM + " WHERE munkakor = '" + mk + "'";

                MySqlCommand cmd = new MySqlCommand(sql, conn);

                if (mkM == "")
                {
                    MessageBox.Show("A Munkakör kitöltése kötelező!");
                }
                else {
                    cmd.ExecuteNonQuery();

                    conn.Close();

                    munkakorMTB.Text = "";
                    alapberMTB.Text = "";

                    this.Close();
                }

            }
            catch (Exception ex)
            {
                MessageBox.Show(string.Format("Nem sikerült elmenteni a módosításokat \n\n\n Hiba részletei: \n\n {0}!", ex.ToString()), "Hiba");
            }
        }

        private void Form6_Load(object sender, EventArgs e)
        {
            munkakorMTB.Text = mk;
            alapberMTB.Text = Convert.ToString(aber);
        }
    }
}
