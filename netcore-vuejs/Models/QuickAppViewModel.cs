using System.Collections.Generic;

public class QuickAppViewModel
{
    public QuickAppFields Fields { get; set; }
}

public class QuickAppFields
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public int MobilePhone { get; set; }
    public string Category { get; set; }
    public string Specialty { get; set; }
    public string StateLicense { get; set; }
    public string HearAbout { get; set; }
}