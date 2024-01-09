using FullStackProject.API.Models.Entities;

namespace FullStackProject.API.Repositories.Abstract;

public interface ICategoryRepository
{
    public void Create(Category category);

    public List<Category> GetAllCategories();

    public Category GetCategoryById(Guid id);

    public void UpdateCategory(Category category);

    public void DeleteCategoryById(Guid id);


}
