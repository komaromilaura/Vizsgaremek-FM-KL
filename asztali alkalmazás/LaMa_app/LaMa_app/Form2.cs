﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace LaMa_app
{
    public partial class Form2 : Form
    {
        public Form2()
        {
            InitializeComponent();
        }

        public string tablazat = "";

//Új felhasználó rögzítése

        private void felhRB_Click(object sender, EventArgs e)
        {
            int ivir = Convert.ToInt32(ivirTB2.Text);
            string vnev = vnevTb.Text;
            string knev = knevTB.Text;
            string jelszo = jelszoTB.Text;

            string titkos_jelszo = TitkosPwd(jelszo);
            int vas = 0;
            int zala = 0;
            int gyor = 0;
            int admin = 0;

            if (vasCB.Checked == true) {
                vas = 1;
            }

            if (gyorCB.Checked == true)
            {
                gyor = 1;
            }

            if (zalaCB.Checked == true)
            {
                zala = 1;
            }

            if (adminCB.Checked == true)
            {
                admin = 1;
            }

            try
            {

                string connStr = "server=localhost;user=root;database=lamafelhasznalok;port=3306";

                MySqlConnection conn = new MySqlConnection(connStr);
                conn.Open();

                string sql = "insert into users (IVIR, Vezetek_nev, Kereszt_nev, password, Vas, Gyor, Zala, Admin) values ('" + ivir + "','" + vnev + "','" + knev + "','" + titkos_jelszo + "','" + vas + "','" + gyor + "','" + zala + "','" + admin + "')";
                if (titkos_jelszo == "")
                {
                    MessageBox.Show("Jelszó megadása kötelező!");
                }
                else
                {
                    if (admin == 1)
                    {
                        string sql_admin = "insert into admin (IVIR, Password) values ('" + ivir + "','" + titkos_jelszo + "')";
                        MySqlCommand cmd_admin = new MySqlCommand(sql_admin, conn);
                        cmd_admin.ExecuteNonQuery();
                    }

                    MySqlCommand cmd = new MySqlCommand(sql, conn);
                    cmd.ExecuteNonQuery();
                    conn.Close();

                    ivirTB2.Text = "";
                    knevTB.Text = "";
                    vnevTb.Text = "";
                    jelszoTB.Text = "";
                    vasCB.Checked = false;
                    gyorCB.Checked = false;
                    zalaCB.Checked = false;
                    adminCB.Checked = false;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(string.Format("Nem sikerült elmenteni a módosításokat \n\n\n Hiba részletei: \n\n {0}!", ex.ToString()), "Hiba");
            }
        }

//Új állomás rögzítése

        private void allomasRB_Click(object sender, EventArgs e)
        {

            int ssz = Convert.ToInt32(sszTB.Text);
            string nev = nevTB.Text;
            int megye = megyeCB.SelectedIndex;
            int vezeto = Convert.ToInt32(vezetoCB.SelectedItem.ToString());

            try
            {

                string connStr = "server=localhost;user=root;database=lamafelhasznalok;port=3306";

                MySqlConnection conn = new MySqlConnection(connStr);

                conn.Open();

                string sql = "insert into allomasok (sorszam, nev, megye_id, vezeto) values ('" + ssz + "','" + nev + "','" + megye + "','" + vezeto + "')";

                MySqlCommand cmd = new MySqlCommand(sql, conn);

                cmd.ExecuteNonQuery();

                conn.Close();

                sszTB.Text = "";
                nevTB.Text = "";
                megyeCB.SelectedIndex = 0;
                vezetoCB.SelectedIndex = 0;
            }
            catch (Exception ex)
            {
                MessageBox.Show(string.Format("Nem sikerült elmenteni a módosításokat \n\n\n Hiba részletei: \n\n {0}!", ex.ToString()), "Hiba");
            }
        }

//Új munkakör rögzítése

        private void munkakorRB_Click(object sender, EventArgs e)
        {
            string munkakor = munkakorTB.Text;
            int alapber = Convert.ToInt32(alapberTB.Text);

            try
            {

                string connStr = "server=localhost;user=root;database=lamafelhasznalok;port=3306";

                MySqlConnection conn = new MySqlConnection(connStr);

                conn.Open();

                string sql = "insert into munkakorok (munkakor, alapber) values ('" + munkakor + "','" + alapber + "')";

                MySqlCommand cmd = new MySqlCommand(sql, conn);

                cmd.ExecuteNonQuery();

                conn.Close();

                munkakorTB.Text = "";
                alapberTB.Text = "";
            }
            catch (Exception ex)
            {
                MessageBox.Show(string.Format("Nem sikerült elmenteni a módosításokat \n\n\n Hiba részletei: \n\n {0}!", ex.ToString()), "Hiba");
            }
        }

//Egyéb... comboboxok feltöltése adatbázisból

        private void tabPage2_Enter(object sender, EventArgs e)
        {
            string connStr = "server=localhost;user=root;database=lamafelhasznalok;port=3306";

            MySqlConnection conn = new MySqlConnection(connStr);
            try
            {
                megyeCB.Items.Clear();
                megyeCB.Items.Add("");

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

                    megyeCB.Items.Add(elem);
                }

                rdr.Close();

                vezetoCB.Items.Clear();
                vezetoCB.Items.Add("");

                string sql_vezeto = "select * from users";

                MySqlCommand cmd_vezeto = new MySqlCommand(sql_vezeto, conn);

                MySqlDataReader rdr_vezeto = cmd_vezeto.ExecuteReader();

                while (rdr_vezeto.Read())
                {
                    string ivir = Convert.ToString(rdr_vezeto[0]);

                    vezetoCB.Items.Add(ivir);
                }

                rdr_vezeto.Close();

                conn.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show(string.Format("Hiba történt! \n\n\n Hiba részletei: \n\n {0}!", ex.ToString()), "Hiba");
            }

            
        }

//Felhasználó módosítása Form megnyitása

        private void felhDelB_Click(object sender, EventArgs e)
        {
            this.Visible = false;
            tablazat = "felhasznalo";
            Form3 megnyitas = new Form3(tablazat);
            
            megnyitas.ShowDialog();
            this.Visible = true;
        }

//Állomások módosítása Form megnyitása

        private void allomasDelB_Click(object sender, EventArgs e)
        {
            this.Visible = false;
            tablazat = "allomas";
            Form3 megnyitas = new Form3(tablazat);

            megnyitas.ShowDialog();
            this.Visible = true;
        }

//Munkakörök módosítása Form megnyitása

        private void munkakorDelB_Click(object sender, EventArgs e)
        {
            this.Visible = false;
            tablazat = "munkakor";
            Form3 megnyitas = new Form3(tablazat);

            megnyitas.ShowDialog();
            this.Visible = true;
        }

//Aplikáció bezárása

        private void bezarasB_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

//Aplikáció bezárása (Egyéb...)

        private void bezarEgyebB_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

//Jelszó titkosítás

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
