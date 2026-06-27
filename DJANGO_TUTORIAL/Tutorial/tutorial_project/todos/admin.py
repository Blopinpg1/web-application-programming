from django.contrib import admin

# Register your models here.

from .models import Todo, Person

admin.site.register(Person)
# admin.site.register(Todo)

@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ('title','importance','deadline','done')
    search_fields = ('title',)
    list_filter =  ('importance','deadline')
