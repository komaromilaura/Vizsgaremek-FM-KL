using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;
using MySql.Data.MySqlClient;
using Microsoft.Office;

namespace LaMa_app
{
    public partial class Form3 : Form
    {
        public string tabla = " ";
        public Form3(string tablazat)
        {
            InitializeComponent();
            tabla = tablazat;
        }

        public List<Megyek> megyek = new List<Megyek>();
        private void button3_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void Form3_Load(object sender, EventArgs e)
        {
            string tablazat = tabla;
            string connStr = "server=localhost;user=root;database=lamafelhasznalok;port=3306";

            MySqlConnection conn = new MySqlConnection(connStr);

            switch (tablazat) {
                case "felhasznalo":
                    tablazatL.Text = "Felhasználók:";
                                        
                    try
                    {
                        dataGridView1.ColumnCount = 9;
                        dataGridView1.Columns[0].Name = "IVIR";
                        dataGridView1.Columns[1].Name = "Vezetéknév";
                        dataGridView1.Columns[2].Name = "Keresztnév";
                        dataGridView1.Columns[3].Name = "Jelszó";
                        dataGridView1.Columns[4].Name = "Vas";
                        dataGridView1.Columns[5].Name = "Győr";
                        dataGridView1.Columns[6].Name = "Zala";
                        dataGridView1.Columns[7].Name = "Admin";
                        dataGridView1.Columns[8].Name = "Aktív";

                        conn.Open();

                        string sql = "select * from users";

                        MySqlCommand cmd = new MySqlCommand(sql, conn);

                        MySqlDataReader rdr = cmd.ExecuteReader();

                        while (rdr.Read())
                        {
                           dataGridView1.Rows.Add(Convert.ToString(rdr[0]), Convert.ToString(rdr[1]), Convert.ToString(rdr[2]), Convert.ToString(rdr[3]), Convert.ToString(rdr[4]), Convert.ToString(rdr[5]), Convert.ToString(rdr[6]),Convert.ToString(rdr[7]), Convert.ToString(rdr[8]));
                        }

                        rdr.Close();
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show(ex.ToString());
                    }

                    conn.Close();
                    
                    break;

                case "allomas":
                    tablazatL.Text = "Állomások:";
                    try
                    {
                        dataGridView1.ColumnCount = 5;
                        dataGridView1.Columns[0].Name = "Sorszám";
                        dataGridView1.Columns[1].Name = "Név";
                        dataGridView1.Columns[2].Name = "Megye ID";
                        dataGridView1.Columns[3].Name = "Megye név";
                        dataGridView1.Columns[4].Name = "Vezető (IVIR)";

                        conn.Open();

                        string sql_megye = "select * from megyek";
                        string sql = "select * from allomasok";
                        

                        MySqlCommand cmd = new MySqlCommand(sql, conn);
                        MySqlCommand cmd_megye = new MySqlCommand(sql_megye, conn);
                        
                        MySqlDataReader rdr_megye = cmd_megye.ExecuteReader();
                        
                        while (rdr_megye.Read())
                        {
                            int id = Convert.ToInt32(rdr_megye[0]);
                            string nev = Convert.ToString(rdr_megye[1]);

                            Megyek elem = new Megyek(id, nev);

                            megyek.Add(elem);
                        }

                        rdr_megye.Close();


                        MySqlDataReader rdr = cmd.ExecuteReader();

                        string megye = "";

                        while (rdr.Read())
                        {
                            for (int i = 0; i < megyek.Count;i++) {
                                if (Convert.ToInt32(rdr[2]) == megyek[i].id) {
                                    megye = megyek[i].nev;
                                }
                            }
                            dataGridView1.Rows.Add(Convert.ToString(rdr[0]), Convert.ToString(rdr[1]), Convert.ToString(rdr[2]), megye, Convert.ToString(rdr[3]));
                        }

                        rdr.Close();

                    } catch (Exception ex)
                    {
                        MessageBox.Show(ex.ToString());
                    }

                    conn.Close();
                    break;
                
                case "munkakor":
                    tablazatL.Text = "Munkakörök:";

                    try
                    {
                        dataGridView1.ColumnCount = 3;
                        dataGridView1.Columns[0].Name = "ID";
                        dataGridView1.Columns[1].Name = "Munkakör";
                        dataGridView1.Columns[2].Name = "Alapbér";

                        conn.Open();

                        string sql = "select * from munkakorok";

                        MySqlCommand cmd = new MySqlCommand(sql, conn);

                        MySqlDataReader rdr = cmd.ExecuteReader();

                        while (rdr.Read())
                        {
                            dataGridView1.Rows.Add(Convert.ToString(rdr[0]), Convert.ToString(rdr[1]), Convert.ToString(rdr[2]));
                        }

                        rdr.Close();
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show(ex.ToString());
                    }

                    conn.Close();
                    break;
                case "auto":
                    tablazatL.Text = "Autók:";
                    break;
                case null:
                    MessageBox.Show("Hiba történt!");
                    break;

            }
            
            tablazatL.Visible = true;
        }

        private void visszaB_Click(object sender, EventArgs e)
        {
            this.Visible = false;
        }

        private void excelB_Click(object sender, EventArgs e)
        {
            try
            {
                Microsoft.Office.Interop.Excel._Application app = new Microsoft.Office.Interop.Excel.Application();
                Microsoft.Office.Interop.Excel._Workbook workbook = app.Workbooks.Add(Type.Missing);
                Microsoft.Office.Interop.Excel._Worksheet worksheet = null;
                app.Visible = false;
                //worksheet = workbook.Sheets["Munka1"];
                worksheet = workbook.ActiveSheet;
                worksheet.Name = "teszt";
                for (int i = 1; i < dataGridView1.Columns.Count + 1; i++)
                {
                    worksheet.Cells[1, i] = dataGridView1.Columns[i - 1].HeaderText;
                }
                for (int i = 0; i < dataGridView1.Rows.Count - 1; i++)
                {
                    for (int j = 0; j < dataGridView1.Columns.Count; j++)
                    {
                        worksheet.Cells[i + 2, j + 1] = dataGridView1.Rows[i].Cells[j].Value.ToString();
                    }
                }
                workbook.SaveAs("D:\\output.xlsx", Type.Missing, Type.Missing, Type.Missing, Type.Missing, Type.Missing, Microsoft.Office.Interop.Excel.XlSaveAsAccessMode.xlExclusive, Type.Missing, Type.Missing, Type.Missing, Type.Missing);
                app.Quit();

                MessageBox.Show("Sikeres export");
            }
            catch (Exception ex)
            {
                MessageBox.Show("Hiba történt!\n{0}", Convert.ToString(ex));
            }
        }

        private void modositB_Click(object sender, EventArgs e)
        {
            string tablazat = tabla;
            
             switch (tablazat)
            {
                case "felhasznalo":
                    int ivir = Convert.ToInt32(dataGridView1.SelectedRows[0].Cells[0].Value);
                    string vnev = Convert.ToString(dataGridView1.SelectedRows[0].Cells[1].Value);
                    string knev = Convert.ToString(dataGridView1.SelectedRows[0].Cells[2].Value);
                    string pwd = Convert.ToString(dataGridView1.SelectedRows[0].Cells[3].Value);
                    int vas = Convert.ToInt32(dataGridView1.SelectedRows[0].Cells[4].Value);
                    int gyor = Convert.ToInt32(dataGridView1.SelectedRows[0].Cells[5].Value);
                    int zala = Convert.ToInt32(dataGridView1.SelectedRows[0].Cells[6].Value);
                    int admin = Convert.ToInt32(dataGridView1.SelectedRows[0].Cells[7].Value);
                    int aktiv = Convert.ToInt32(dataGridView1.SelectedRows[0].Cells[8].Value);

                    Form4 megnyit = new Form4(ivir, vnev, knev, pwd, vas, gyor, zala, admin, aktiv);
                    
                    this.Visible = false;
                    
                    megnyit.ShowDialog();

                    dataGridView1.Rows.Clear();

                    try
                    {
                        string connStr = "server=localhost;user=root;database=lamafelhasznalok;port=3306";

                        MySqlConnection conn = new MySqlConnection(connStr);

                        conn.Open();

                        string sql_friss = "select * from users";

                        MySqlCommand cmd_friss = new MySqlCommand(sql_friss, conn);

                        MySqlDataReader rdr = cmd_friss.ExecuteReader();

                        while (rdr.Read())
                        {
                            dataGridView1.Rows.Add(Convert.ToString(rdr[0]), Convert.ToString(rdr[1]), Convert.ToString(rdr[2]), Convert.ToString(rdr[3]), Convert.ToString(rdr[4]), Convert.ToString(rdr[5]), Convert.ToString(rdr[6]), Convert.ToString(rdr[7]), Convert.ToString(rdr[8]));
                        }

                        rdr.Close();

                        conn.Close();
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show(ex.ToString());
                    }

                    this.Visible = true;
                    
                    break;
                case "allomas":
                    tablazatL.Text = "Ăllomások:";
                    int ssz = Convert.ToInt32(dataGridView1.SelectedRows[0].Cells[0].Value);
                    string nev = Convert.ToString(dataGridView1.SelectedRows[0].Cells[1].Value);
                    int megye_id = Convert.ToInt32(dataGridView1.SelectedRows[0].Cells[2].Value);
                    int  vezeto = Convert.ToInt32(dataGridView1.SelectedRows[0].Cells[4].Value);
 
                    Form5 megnyit_allomas = new Form5(ssz, nev, megye_id, vezeto);

                    this.Visible = false;

                    megnyit_allomas.ShowDialog();

                    dataGridView1.Rows.Clear();

                    try
                    {
                        string connStr = "server=localhost;user=root;database=lamafelhasznalok;port=3306";

                        MySqlConnection conn = new MySqlConnection(connStr);

                        conn.Open();

                        string sql_friss = "select * from allomasok";

                        MySqlCommand cmd_friss = new MySqlCommand(sql_friss, conn);

                        MySqlDataReader rdr = cmd_friss.ExecuteReader();
                        
                        string megye = "";

                        while (rdr.Read())
                        {
                            for (int i = 0; i < megyek.Count; i++)
                            {
                                if (Convert.ToInt32(rdr[2]) == megyek[i].id)
                                {
                                    megye = megyek[i].nev;
                                }
                            }
                            dataGridView1.Rows.Add(Convert.ToString(rdr[0]), Convert.ToString(rdr[1]), Convert.ToString(rdr[2]), megye, Convert.ToString(rdr[3]));
                        }

                        rdr.Close();

                        conn.Close();
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show(ex.ToString());
                    }

                    this.Visible = true;
                    break;
                case "munkakor":
                    tablazatL.Text = "Munkakörök:";
                    
                    string mk = Convert.ToString(dataGridView1.SelectedRows[0].Cells[1].Value);
                    int aber = Convert.ToInt32(dataGridView1.SelectedRows[0].Cells[2].Value);

                    Form6 megnyit_munkak = new Form6(mk, aber);

                    this.Visible = false;

                    megnyit_munkak.ShowDialog();

                    dataGridView1.Rows.Clear();

                    try
                    {
                        string connStr = "server=localhost;user=root;database=lamafelhasznalok;port=3306";

                        MySqlConnection conn = new MySqlConnection(connStr);

                        conn.Open();

                        string sql_friss = "select * from munkakorok";

                        MySqlCommand cmd_friss = new MySqlCommand(sql_friss, conn);

                        MySqlDataReader rdr = cmd_friss.ExecuteReader();

                        while (rdr.Read())
                        {
                            dataGridView1.Rows.Add(Convert.ToString(rdr[0]), Convert.ToString(rdr[1]), Convert.ToString(rdr[2]));
                        }

                        rdr.Close();

                        conn.Close();
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show(ex.ToString());
                    }

                    this.Visible = true;

                    break;
                case null:
                    MessageBox.Show("Hiba történt!");
                    break;

            }
        }

        public string Pwd(string titkosJelszo)
        {
            System.Text.UTF8Encoding encoder = new System.Text.UTF8Encoding();
            System.Text.Decoder utf8decoder = encoder.GetDecoder();

            byte[] decode_byte = Convert.FromBase64String(titkosJelszo);

            int karakterDB = utf8decoder.GetCharCount(decode_byte, 0, decode_byte.Length);

            char[] decode_char = new char[karakterDB];

            utf8decoder.GetChars(decode_byte, 0, decode_byte.Length, decode_char, 0);

            string jelszo = new string(decode_char);

            return jelszo;
        }
    }
    

    public class Megyek
    { 
        public int id { get; private set; }
        public string nev { get; private set; }

        public Megyek(int id, string nev) {
            this.id = id;
            this.nev = nev;
        }
    }
}
