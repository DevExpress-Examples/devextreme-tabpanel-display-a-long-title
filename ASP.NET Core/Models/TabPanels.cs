namespace TabPanel_Display_long_titles.Models
{
    public class TabPanels
{
    public static readonly IEnumerable<TabPanel> TabPanelsArray = new[] {
            new TabPanel {
                header = "Display ellipses (...)",
                id = "tabpanel1",
                className = "tabs",
                itemTitleTemplate = "titleEllipses"
            },
            new TabPanel {
                header = "Show full text",
                id = "tabpanel2",
                className = "tabs",
                itemTitleTemplate = "titleDefault"
            },
            new TabPanel {
                header = "Title word-wrap",
                id = "tabpanel3",
                itemTitleTemplate = "titleDefault"
            }
        };
}
}
