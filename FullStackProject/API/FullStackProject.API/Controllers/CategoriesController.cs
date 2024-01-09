using FullStackProject.API.Data;
using FullStackProject.API.Models.DTO;
using FullStackProject.API.Models.Entities;
using FullStackProject.API.Repositories.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FullStackProject.API.Controllers;

//https://localhost:xxxx/api/categories
[Route("api/[controller]")]
[ApiController]
public class CategoriesController : ControllerBase
{
    private readonly ICategoryRepository categoryRepository;
    public CategoriesController(ICategoryRepository categoryRepository)
    {
        this.categoryRepository = categoryRepository;
    }
    //
    [HttpPost]
    public void CreateCategory([FromBody] CreateCategoryRequestDto request)
      {
        //Map DTO to Domain Model
        var category = new Category
        {
            Name = request.Name,
            UrlHandle = request.UrlHandle,
        };
        
        categoryRepository.Create(category) ;

        //Domain model to DTO
        var response = new CategoryDto
        {
            Id = category.Id,
            Name = category.Name,
            UrlHandle = category.UrlHandle,
        };
    }
    [HttpGet("GetAll")]
    public List<CategoryDto> GetAllCategories() {

        List<Category> categories = categoryRepository.GetAllCategories();

        // Domain model listesini DTO listesine çevir
        var categoryDtos = categories.Select(category => new CategoryDto
        {
            Id = category.Id,
            Name = category.Name,
            UrlHandle = category.UrlHandle,
        }).ToList();
        return categoryDtos;
    }

    //[FromRoute] attribute, URL'deki belirli bir route parametresini bir metot parametresine bağlamak için kullanılır.
    [HttpGet("{id}")]
    public ActionResult<CategoryDto> GetCategoryById([FromRoute] Guid id)
    {
        Category category =categoryRepository.GetCategoryById(id);

        // Eğer kategori bulunamazsa NotFound döndür
        if (category == null)
        {
            return NotFound();
        }

        // Domain modelini DTO'ya çevir
        var categoryDto = new CategoryDto
        {
            Id = category.Id,
            Name = category.Name,
            UrlHandle = category.UrlHandle,
        };

        return categoryDto;
    }

    [HttpPut("Edit/{id}")]
    public void UpdateCategory([FromRoute] Guid id, UpdateCategoryRequestDto request) {
        //Map DTO to Domain Model
        var category = new Category
        {
            Id = id,
            Name = request.Name,
            UrlHandle = request.UrlHandle
        };
        categoryRepository.UpdateCategory(category);
        if(category != null)
        {
            NotFound();
        }
        var categoryDto = new CategoryDto
        {
            Id = category.Id,
            Name = category.Name,
            UrlHandle = category.UrlHandle,
        };

    }

    [HttpDelete("Delete/{id}")]
    public void DeleteCategory([FromRoute] Guid id)
    {
        var category = categoryRepository.GetCategoryById(id);
        if (category == null)
        {
            NotFound();
        }
        categoryRepository.DeleteCategoryById(id);
        var categoryDto = new CategoryDto
        {
            Id = category.Id,
            Name = category.Name,
            UrlHandle = category.UrlHandle,
        };
    }
}
