
namespace LaMa_app
{
    partial class adminSingInF
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
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
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(adminSingInF));
            this.titleL = new System.Windows.Forms.Label();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.ivirTB = new System.Windows.Forms.TextBox();
            this.pwTB = new System.Windows.Forms.TextBox();
            this.bejelentkezesB = new System.Windows.Forms.Button();
            this.exitB = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // titleL
            // 
            resources.ApplyResources(this.titleL, "titleL");
            this.titleL.Name = "titleL";
            // 
            // pictureBox1
            // 
            resources.ApplyResources(this.pictureBox1, "pictureBox1");
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.TabStop = false;
            // 
            // label1
            // 
            resources.ApplyResources(this.label1, "label1");
            this.label1.Name = "label1";
            // 
            // label2
            // 
            resources.ApplyResources(this.label2, "label2");
            this.label2.Name = "label2";
            // 
            // ivirTB
            // 
            resources.ApplyResources(this.ivirTB, "ivirTB");
            this.ivirTB.Name = "ivirTB";
            // 
            // pwTB
            // 
            resources.ApplyResources(this.pwTB, "pwTB");
            this.pwTB.Name = "pwTB";
            // 
            // bejelentkezesB
            // 
            resources.ApplyResources(this.bejelentkezesB, "bejelentkezesB");
            this.bejelentkezesB.Name = "bejelentkezesB";
            this.bejelentkezesB.UseVisualStyleBackColor = true;
            this.bejelentkezesB.Click += new System.EventHandler(this.bejelentkezesB_Click);
            // 
            // exitB
            // 
            resources.ApplyResources(this.exitB, "exitB");
            this.exitB.Name = "exitB";
            this.exitB.UseVisualStyleBackColor = true;
            this.exitB.Click += new System.EventHandler(this.exitB_Click);
            // 
            // adminSingInF
            // 
            resources.ApplyResources(this, "$this");
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Yellow;
            this.Controls.Add(this.exitB);
            this.Controls.Add(this.bejelentkezesB);
            this.Controls.Add(this.pwTB);
            this.Controls.Add(this.ivirTB);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.pictureBox1);
            this.Controls.Add(this.titleL);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.Name = "adminSingInF";
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label titleL;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox ivirTB;
        private System.Windows.Forms.TextBox pwTB;
        private System.Windows.Forms.Button bejelentkezesB;
        private System.Windows.Forms.Button exitB;
    }
}

