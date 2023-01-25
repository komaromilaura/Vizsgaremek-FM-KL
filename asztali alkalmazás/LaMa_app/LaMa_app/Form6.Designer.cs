
namespace LaMa_app
{
    partial class Form6
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
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.alapberMTB = new System.Windows.Forms.TextBox();
            this.munkakorMTB = new System.Windows.Forms.TextBox();
            this.munkakorokMRB = new System.Windows.Forms.Button();
            this.label9 = new System.Windows.Forms.Label();
            this.label13 = new System.Windows.Forms.Label();
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBox1
            // 
            this.groupBox1.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.groupBox1.Controls.Add(this.alapberMTB);
            this.groupBox1.Controls.Add(this.munkakorMTB);
            this.groupBox1.Controls.Add(this.munkakorokMRB);
            this.groupBox1.Controls.Add(this.label9);
            this.groupBox1.Controls.Add(this.label13);
            this.groupBox1.Font = new System.Drawing.Font("Segoe UI", 13.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.groupBox1.Location = new System.Drawing.Point(12, 12);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(457, 327);
            this.groupBox1.TabIndex = 24;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Munkakörök";
            // 
            // alapberMTB
            // 
            this.alapberMTB.Location = new System.Drawing.Point(140, 138);
            this.alapberMTB.Name = "alapberMTB";
            this.alapberMTB.Size = new System.Drawing.Size(292, 38);
            this.alapberMTB.TabIndex = 24;
            // 
            // munkakorMTB
            // 
            this.munkakorMTB.Location = new System.Drawing.Point(140, 80);
            this.munkakorMTB.Name = "munkakorMTB";
            this.munkakorMTB.Size = new System.Drawing.Size(292, 38);
            this.munkakorMTB.TabIndex = 23;
            // 
            // munkakorokMRB
            // 
            this.munkakorokMRB.Font = new System.Drawing.Font("Segoe UI", 13.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.munkakorokMRB.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.munkakorokMRB.Location = new System.Drawing.Point(315, 257);
            this.munkakorokMRB.Name = "munkakorokMRB";
            this.munkakorokMRB.Size = new System.Drawing.Size(118, 54);
            this.munkakorokMRB.TabIndex = 28;
            this.munkakorokMRB.Text = "Rögzítés";
            this.munkakorokMRB.UseVisualStyleBackColor = true;
            this.munkakorokMRB.Click += new System.EventHandler(this.munkakorokMRB_Click);
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label9.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.label9.Location = new System.Drawing.Point(20, 87);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(114, 28);
            this.label9.TabIndex = 10;
            this.label9.Text = "Munkakör:";
            // 
            // label13
            // 
            this.label13.AutoSize = true;
            this.label13.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label13.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.label13.Location = new System.Drawing.Point(20, 138);
            this.label13.Name = "label13";
            this.label13.Size = new System.Drawing.Size(92, 28);
            this.label13.TabIndex = 22;
            this.label13.Text = "Alapbér:";
            // 
            // Form6
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoScroll = true;
            this.AutoSize = true;
            this.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.BackColor = System.Drawing.Color.Yellow;
            this.ClientSize = new System.Drawing.Size(481, 350);
            this.Controls.Add(this.groupBox1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.Name = "Form6";
            this.Text = "Munkakörök módosítás";
            this.Load += new System.EventHandler(this.Form6_Load);
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.TextBox alapberMTB;
        private System.Windows.Forms.TextBox munkakorMTB;
        private System.Windows.Forms.Button munkakorokMRB;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.Label label13;
    }
}