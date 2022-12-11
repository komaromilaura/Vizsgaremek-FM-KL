
namespace LaMa_app
{
    partial class Form5
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
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.vezetoMCB = new System.Windows.Forms.ComboBox();
            this.label16 = new System.Windows.Forms.Label();
            this.megyeMCB = new System.Windows.Forms.ComboBox();
            this.allomasokMB = new System.Windows.Forms.Button();
            this.sszMTB = new System.Windows.Forms.TextBox();
            this.label10 = new System.Windows.Forms.Label();
            this.nevMTB = new System.Windows.Forms.TextBox();
            this.label14 = new System.Windows.Forms.Label();
            this.label15 = new System.Windows.Forms.Label();
            this.groupBox2.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.vezetoMCB);
            this.groupBox2.Controls.Add(this.label16);
            this.groupBox2.Controls.Add(this.megyeMCB);
            this.groupBox2.Controls.Add(this.allomasokMB);
            this.groupBox2.Controls.Add(this.sszMTB);
            this.groupBox2.Controls.Add(this.label10);
            this.groupBox2.Controls.Add(this.nevMTB);
            this.groupBox2.Controls.Add(this.label14);
            this.groupBox2.Controls.Add(this.label15);
            this.groupBox2.Font = new System.Drawing.Font("Segoe UI", 13.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.groupBox2.Location = new System.Drawing.Point(12, 12);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(457, 327);
            this.groupBox2.TabIndex = 25;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "Állomások";
            // 
            // vezetoMCB
            // 
            this.vezetoMCB.FormattingEnabled = true;
            this.vezetoMCB.Items.AddRange(new object[] {
            ""});
            this.vezetoMCB.Location = new System.Drawing.Point(146, 191);
            this.vezetoMCB.Name = "vezetoMCB";
            this.vezetoMCB.Size = new System.Drawing.Size(292, 39);
            this.vezetoMCB.TabIndex = 31;
            // 
            // label16
            // 
            this.label16.AutoSize = true;
            this.label16.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label16.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.label16.Location = new System.Drawing.Point(37, 196);
            this.label16.Name = "label16";
            this.label16.Size = new System.Drawing.Size(81, 28);
            this.label16.TabIndex = 30;
            this.label16.Text = "Vezető:";
            // 
            // megyeMCB
            // 
            this.megyeMCB.Font = new System.Drawing.Font("Segoe UI", 10.2F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.megyeMCB.FormattingEnabled = true;
            this.megyeMCB.Items.AddRange(new object[] {
            ""});
            this.megyeMCB.Location = new System.Drawing.Point(146, 43);
            this.megyeMCB.Name = "megyeMCB";
            this.megyeMCB.Size = new System.Drawing.Size(292, 31);
            this.megyeMCB.TabIndex = 27;
            // 
            // allomasokMB
            // 
            this.allomasokMB.Font = new System.Drawing.Font("Segoe UI", 13.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.allomasokMB.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.allomasokMB.Location = new System.Drawing.Point(320, 257);
            this.allomasokMB.Name = "allomasokMB";
            this.allomasokMB.Size = new System.Drawing.Size(118, 54);
            this.allomasokMB.TabIndex = 21;
            this.allomasokMB.Text = "Rögzítés";
            this.allomasokMB.UseVisualStyleBackColor = true;
            this.allomasokMB.Click += new System.EventHandler(this.button4_Click);
            // 
            // sszMTB
            // 
            this.sszMTB.Location = new System.Drawing.Point(146, 138);
            this.sszMTB.Name = "sszMTB";
            this.sszMTB.Size = new System.Drawing.Size(292, 38);
            this.sszMTB.TabIndex = 26;
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label10.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.label10.Location = new System.Drawing.Point(37, 138);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(96, 28);
            this.label10.TabIndex = 25;
            this.label10.Text = "Sorszám:";
            // 
            // nevMTB
            // 
            this.nevMTB.Location = new System.Drawing.Point(146, 89);
            this.nevMTB.Name = "nevMTB";
            this.nevMTB.Size = new System.Drawing.Size(292, 38);
            this.nevMTB.TabIndex = 24;
            // 
            // label14
            // 
            this.label14.AutoSize = true;
            this.label14.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label14.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.label14.Location = new System.Drawing.Point(37, 43);
            this.label14.Name = "label14";
            this.label14.Size = new System.Drawing.Size(81, 28);
            this.label14.TabIndex = 10;
            this.label14.Text = "Megye:";
            // 
            // label15
            // 
            this.label15.AutoSize = true;
            this.label15.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label15.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.label15.Location = new System.Drawing.Point(37, 94);
            this.label15.Name = "label15";
            this.label15.Size = new System.Drawing.Size(105, 28);
            this.label15.TabIndex = 22;
            this.label15.Text = "Település:";
            // 
            // Form5
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Yellow;
            this.ClientSize = new System.Drawing.Size(482, 352);
            this.Controls.Add(this.groupBox2);
            this.Name = "Form5";
            this.Text = "Állomások módosítása";
            this.Load += new System.EventHandler(this.Form5_Load);
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.ComboBox vezetoMCB;
        private System.Windows.Forms.Label label16;
        private System.Windows.Forms.ComboBox megyeMCB;
        private System.Windows.Forms.Button allomasokMB;
        private System.Windows.Forms.TextBox sszMTB;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.TextBox nevMTB;
        private System.Windows.Forms.Label label14;
        private System.Windows.Forms.Label label15;
    }
}