using FullStackProject.API.Data;
using FullStackProject.API.Models.Entities;
using FullStackProject.API.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;

namespace FullStackProject.API.Repositories.Concrete;

public class CategoryRepository : ICategoryRepository
{
    private readonly ApplicationDbContext dbContext;
    public CategoryRepository(ApplicationDbContext dbContext)
    {
        this.dbContext = dbContext;
    }
    public void Create(Category category)
    {
        dbContext.Categories.Add(category);
        dbContext.SaveChanges();
    }

    public List<Category> GetAllCategories()
    {
        return dbContext.Categories.ToList();

    }

    public  Category GetCategoryById(Guid id)
    {
        return dbContext.Categories.Find(id);

    }

    public void UpdateCategory(Category category) {
       dbContext.Categories.Update(category);
        dbContext.SaveChanges();
    
    }

    public void DeleteCategoryById(Guid id) {

        var entity = GetCategoryById(id);
      
        dbContext.Categories.Remove(entity);
        dbContext.SaveChanges();
    }
}
