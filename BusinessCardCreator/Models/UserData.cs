using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;

namespace BusinessCardCreator.Models
{
    public class UserData
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Position { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Link { get; set; }
        public string Company { get; set; }
        public IFormFile CompanyLogo { get; set; }
        public string CompanyLogoString // Convert CompanyLogo to base64 image link
        {
            get
            {
                if (CompanyLogo == null)
                    return string.Empty;
                var ms = new MemoryStream();
                CompanyLogo.OpenReadStream().CopyTo(ms);
                string companyLogoString = Convert.ToBase64String(ms.ToArray());
                return string.Format("data:image/png;base64,{0}", companyLogoString);
            }
        }
    }
}
