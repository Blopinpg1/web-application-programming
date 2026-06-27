from django.urls import path, include
from . import views

urlpatterns = [
     path('hello', views.hello_world_view, name='hello_world'),
     path('', views.hello_python_view, name='hello_python'),
     path('htmlrender', views.hello_html_view, name='hello_html'),
     path('special', views.special_view, name='special'),
     path('helloquery', views.hello_query, name='hello_query'),
     path('postendpoint', views.post_example, name='post_example'),
     path('submitendpoint', views.submit_example, name='submit_example'),
     path('submitdjango', views.submit_django_form, name='submit_django'),
     path('templating', views.tempelate_view , name = "templating"),
     path('person/<int:person_id>', views.person_details, name= "person_details"),
     path('delete_todo/<int:todo_id>', views.delete_todo, name= "delete_todo"),
     path('toggle_todo/<int:todo_id>', views.toggle_todo_done, name= "toggle_todo"),
     path('todos', views.todos_view , name = "todos"),
     # path('helloname/<str:name>', views.hello_path, name='hello_html'),
     path('add/<int:num1>/<int:num2>', views.hello_path, name='hello_html'),
     path('jres',views.jres,name="jres")
     
     

]
