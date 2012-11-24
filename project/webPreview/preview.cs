using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.IO;
using System.Diagnostics;

namespace viewPageByAnyBrowser
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            webBrowser1.Navigate(textBox1.Text);
        }

        private void button2_Click(object sender, EventArgs e)
        {
            string html = webBrowser1.Document.GetElementById("logo").InnerHtml;
            //webBrowser1.Document.GetElementById("logo").AttachEventHandler("onmouseover",new EventHandler(show)
            FileStream file = new FileStream(@"d:\temp.html", FileMode.Append, FileAccess.Write);
            StreamWriter sw = new StreamWriter(file);
            sw.Write(html);
            sw.Close();
            Process.Start("chrome", @"d:\temp.html");
            MessageBox.Show(html);
        }
    }
}
