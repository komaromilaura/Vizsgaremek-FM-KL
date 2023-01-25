
namespace LaMa_app
{
    partial class Form3
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form3));
            this.dataGridView1 = new System.Windows.Forms.DataGridView();
            this.tablazatL = new System.Windows.Forms.Label();
            this.modositB = new System.Windows.Forms.Button();
            this.visszaB = new System.Windows.Forms.Button();
            this.bezarTablakB = new System.Windows.Forms.Button();
            this.excelB = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
            this.SuspendLayout();
            // 
            // dataGridView1
            // 
            this.dataGridView1.AllowUserToAddRows = false;
            this.dataGridView1.AllowUserToDeleteRows = false;
            this.dataGridView1.AutoSizeColumnsMode = System.Windows.Forms.DataGridViewAutoSizeColumnsMode.Fill;
            this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            resources.ApplyResources(this.dataGridView1, "dataGridView1");
            this.dataGridView1.MultiSelect = false;
            this.dataGridView1.Name = "dataGridView1";
            this.dataGridView1.ReadOnly = true;
            this.dataGridView1.RowTemplate.Height = 29;
            this.dataGridView1.SelectionMode = System.Windows.Forms.DataGridViewSelectionMode.FullRowSelect;
            // 
            // tablazatL
            // 
            resources.ApplyResources(this.tablazatL, "tablazatL");
            this.tablazatL.Name = "tablazatL";
            // 
            // modositB
            // 
            resources.ApplyResources(this.modositB, "modositB");
            this.modositB.Name = "modositB";
            this.modositB.UseVisualStyleBackColor = true;
            this.modositB.Click += new System.EventHandler(this.modositB_Click);
            // 
            // visszaB
            // 
            resources.ApplyResources(this.visszaB, "visszaB");
            this.visszaB.Name = "visszaB";
            this.visszaB.UseVisualStyleBackColor = true;
            this.visszaB.Click += new System.EventHandler(this.visszaB_Click);
            // 
            // bezarTablakB
            // 
            this.bezarTablakB.Cursor = System.Windows.Forms.Cursors.Hand;
            this.bezarTablakB.FlatAppearance.BorderSize = 0;
            this.bezarTablakB.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent;
            resources.ApplyResources(this.bezarTablakB, "bezarTablakB");
            this.bezarTablakB.ForeColor = System.Drawing.Color.Red;
            this.bezarTablakB.Name = "bezarTablakB";
            this.bezarTablakB.UseVisualStyleBackColor = true;
            this.bezarTablakB.Click += new System.EventHandler(this.bezarTablakB_Click);
            // 
            // excelB
            // 
            this.excelB.BackColor = System.Drawing.Color.PaleGreen;
            this.excelB.Cursor = System.Windows.Forms.Cursors.Hand;
            resources.ApplyResources(this.excelB, "excelB");
            this.excelB.ForeColor = System.Drawing.Color.Black;
            this.excelB.Name = "excelB";
            this.excelB.UseVisualStyleBackColor = false;
            this.excelB.Click += new System.EventHandler(this.excelB_Click);
            // 
            // Form3
            // 
            resources.ApplyResources(this, "$this");
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Yellow;
            this.Controls.Add(this.excelB);
            this.Controls.Add(this.bezarTablakB);
            this.Controls.Add(this.visszaB);
            this.Controls.Add(this.modositB);
            this.Controls.Add(this.tablazatL);
            this.Controls.Add(this.dataGridView1);
            this.Cursor = System.Windows.Forms.Cursors.Default;
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "Form3";
            this.Load += new System.EventHandler(this.Form3_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.DataGridView dataGridView1;
        private System.Windows.Forms.Label tablazatL;
        private System.Windows.Forms.Button modositB;
        private System.Windows.Forms.Button visszaB;
        private System.Windows.Forms.Button bezarTablakB;
        private System.Windows.Forms.Button excelB;
    }
}