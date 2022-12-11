using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace LaMa_app
{
   
    public partial class adminSingInF : Form
    {
        public adminSingInF()
        {
            InitializeComponent();
        }
        


        private void bejelentkezesB_Click(object sender, EventArgs e)
        {
            int felh = Convert.ToInt32(ivirTB.Text);
            string jelszo = pwTB.Text;

            string connStr = "server=localhost;user=root;database=lamafelhasznalok;port=3306";

            MySqlConnection conn = new MySqlConnection(connStr);
            try
            {
                conn.Open();

                string sql = "select * from admin";

                MySqlCommand cmd = new MySqlCommand(sql, conn);

                MySqlDataReader rdr = cmd.ExecuteReader();

                bool valid = false;

                while (rdr.Read())
                {
                    if (Convert.ToInt32(rdr[0]) == felh && Convert.ToString(rdr[1]) == jelszo)
                    {
                            valid = true;
                    }
                    
                }

                if (valid == false)
                {
                    MessageBox.Show("Érvénytelen jelszó vagy felhasználó név!");
                    conn.Close();
                }
                else {
                    this.Visible = false;
                   
                    Form2 megnyitas = new Form2();
                    megnyitas.ShowDialog();                   
                }


                rdr.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
                    
            conn.Close();

            pwTB.Text = "";
            ivirTB.Text = "";
        }

        private void exitB_Click(object sender, EventArgs e)
        {
            System.Windows.Forms.Application.Exit();
        }
    }
}
