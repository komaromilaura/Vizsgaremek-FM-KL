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
    public partial class Form4 : Form
    {
        public int ivir;
        public string vnev;
        public string knev;
        public string pwd;
        public int vas;
        public int gyor;
        public int zala;
        public int admin;
        public int aktiv;
        public Form4(int ivir, string vnev, string knev, string pwd, int vas, int gyor, int zala, int admin, int aktiv)
        {
            InitializeComponent();

            this.ivir = ivir;
            this.vnev = vnev;
            this.knev = knev;
            this.pwd = pwd;
            this.vas = vas;
            this.gyor = gyor;
            this.zala = zala;
            this.admin = admin;
            this.aktiv = aktiv;
        }

        private void Form4_Load(object sender, EventArgs e)
        {
            ivirTB3.Text = Convert.ToString(ivir);
            vnevTB2.Text = vnev;
            knevTB2.Text = knev;
            jelszoTB2.Text = pwd;
            if (vas == 1) {
                vasCB2.Checked = true;
            }
            if (gyor == 1)
            {
                gyorCB2.Checked = true;
            }
            if (zala == 1)
            {
                zalaCB2.Checked = true;
            }
            if (admin == 1)
            {
                adminCB2.Checked = true;
            }
            if (aktiv == 1)
            {
                aktivCB.Checked = true;
            }


        }

        private void felhRB2_Click(object sender, EventArgs e)
        {
            int ivir_uj = Convert.ToInt32(ivirTB3.Text);
            string knev = knevTB2.Text;
            string vnev = vnevTB2.Text;
            string pwdM = jelszoTB2.Text;
            int vas = 0;
            if (vasCB2.Checked)
            {
                vas = 1;
            }
            int gyor = 0;
            if (gyorCB2.Checked)
            {
                gyor = 1;
            }
            int zala = 0;
            if (zalaCB2.Checked)
            {
                zala = 1;
            }
            int adminM = 0;
            if (adminCB2.Checked)
            {
                adminM = 1;
            }
            int aktiv = 0;
            if (aktivCB.Checked)
            {
                aktiv = 1;
            }

            string pwdUj = "";



            string connStr = "server=localhost;user=root;database=lamafelhasznalok;port=3306";

            MySqlConnection conn = new MySqlConnection(connStr);
            
            conn.Open();

            if (TitkosPwd(pwdM) != pwd)
            {
                pwdUj = TitkosPwd(pwdM);

                if (adminM == 1)
                {
                    string sql_adminPwd = "update admin set IVIR = " + ivir_uj + ", Password = '" + pwdUj + "' where IVIR = " + ivir + "";
                    MySqlCommand cmd_adminPwd = new MySqlCommand(sql_adminPwd, conn);

                    cmd_adminPwd.ExecuteNonQuery();
                }
            }
            else
            {
                pwdUj = pwd;
            }



            string sql = "update users set IVIR = " + ivir_uj + ", Vezetek_nev = '" + vnev + "', Kereszt_nev = '" + knev + "', Jelszo = '" + pwdUj + "', Vas = " + vas + ",  Gyor = " + gyor + ", Zala = " + zala + ", Admin = " + adminM + ", Aktiv = " + aktiv + " where IVIR = " + ivir + "";

            MySqlCommand cmd = new MySqlCommand(sql, conn);
            
            cmd.ExecuteNonQuery();

            string sql_torles = "delete from admin where IVIR = " + ivir + "";
            
            string sql_admintabla = "select * from admin";

            bool van = false;

            if (adminM != admin)
            {
                if (adminM == 1)
                {
                    string sql_admin = "insert into admin (IVIR, Password) values ('" + ivir + "','" + pwdUj + "')";
                    MySqlCommand cmd_admin = new MySqlCommand(sql_admin, conn);
                    cmd_admin.ExecuteNonQuery();
                }
                else
                {
                    MySqlCommand cmd_admin = new MySqlCommand(sql_admintabla, conn);
                    MySqlDataReader rdr = cmd_admin.ExecuteReader();

                    while (rdr.Read())
                    {
                        if (Convert.ToInt32(rdr[0]) == ivir)
                        {
                            van = true;
                        }
                    }

                    rdr.Close();
                }
            }
        

            if (van) {
                MySqlCommand cmd_admin_torles = new MySqlCommand(sql_torles, conn);
                cmd_admin_torles.ExecuteNonQuery();
            }
            conn.Close();

            this.Visible = false;
        }

        private void bezarasB_Click(object sender, EventArgs e)
        {
            this.Visible = false;
        }

        public string TitkosPwd(string jelszo)
        {
            try
            {
                byte[] titkos_pw = new byte[jelszo.Length];

                titkos_pw = System.Text.Encoding.UTF8.GetBytes(jelszo);
                string tpwd = Convert.ToBase64String(titkos_pw);

                return tpwd;
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
        }
    }
}
