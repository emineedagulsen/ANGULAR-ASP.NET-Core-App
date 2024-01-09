namespace FullStackProject.API.Models.Entities;

public class BlogPost
{
    public Guid Id { get; set; }

    public string? Title { get; set; }

    public string? ShortDescription { get; set; }

    public string?Content { get; set; }

    public string? FeaturedImageURL { get; set;}

    public string? URLHandle { get; set;}

    public DateTime PublishedDate { get; set; }

    public string? Author { get; set;}

    public bool IsVisible { get; set; }

}
