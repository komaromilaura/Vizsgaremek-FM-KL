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

//Bejelentkezés

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
                    if (Convert.ToInt32(rdr[0]) == felh && JelszoDekod(Convert.ToString(rdr[1])) == jelszo)
                    {
                            valid = true;
                    }                   
                }

                if (valid == false || Convert.ToString(felh) == "" || jelszo == "")
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

//Jelszó dekódolása

        public string JelszoDekod(string pwd)
        {
            System.Text.UTF8Encoding encoder = new System.Text.UTF8Encoding();
            System.Text.Decoder utf8decoder = encoder.GetDecoder();
            
            byte[] decode_byte = Convert.FromBase64String(pwd);
            int karakterDB = utf8decoder.GetCharCount(decode_byte, 0, decode_byte.Length);
            
            char[] decode_char = new char[karakterDB];
            utf8decoder.GetChars(decode_byte, 0, decode_byte.Length, decode_char, 0);
            
            string dekod = new string(decode_char);
            
            return dekod;
        }

//Kilépés

        private void exitB_Click(object sender, EventArgs e)
        {
            System.Windows.Forms.Application.Exit();
        }
    }
}
