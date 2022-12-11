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

        private void allomasMRB_Click(object sender, EventArgs e)
        {
            string mkM = Convert.ToString(munkakorMTB.Text);
            int aberM = Convert.ToInt32(alapberMTB.Text);

            string connStr = "server=localhost;user=root;database=lamafelhasznalok;port=3306";

            MySqlConnection conn = new MySqlConnection(connStr);

            conn.Open();

            string sql = "update munkakorok set munkakor = '" + mkM + "', alapber = " + aberM + " WHERE munkakor = '" + mk + "'";

            MySqlCommand cmd = new MySqlCommand(sql, conn);

            cmd.ExecuteNonQuery();

            conn.Close();

            munkakorMTB.Text = "";
            alapberMTB.Text = "";
        }

        private void Form6_Load(object sender, EventArgs e)
        {
            munkakorMTB.Text = mk;
            alapberMTB.Text = Convert.ToString(aber);
        }
    }
}
