from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseNotAllowed, JsonResponse

from . forms import PersonForm, TodoForm
from .models import Todo, Person
# Create your views here.


def hello_world_view(request):
    return HttpResponse("Hello World")


def hello_python_view(request):
    return HttpResponse("Hello python")


def hello_html_view(request):
    return render(request, "todos/hello.html")


def about(request):
    return render(request, "about.html")


def hello_path(request , num1 , num2):
    return HttpResponse(f" Sum :{num1 + num2} !")
    # hello name 
    
    
def hello_query(request):
    return HttpResponse(f"your query was {request.GET.get("q")}")
    

def special_view(request):
    #do some stuff
    return redirect('hello_html')


def post_example(request):
    if request.method == 'POST':
        form = PersonForm(request.POST)
        
        if form.is_valid():
            name = form.cleaned_data['name']
            age = form.cleaned_data['age']
            job = form.cleaned_data['job']
            
    
        return HttpResponse(f"You posted: {name}, {age}, {job}")
    else:
        return HttpResponseNotAllowed(['POST'])
    pass


def submit_example(request):
    return render(request, 'todos/submit.html')

def submit_django_form(request):
    form = PersonForm()
    return render(request,'todos/submit_django.html',{'form': form})


def tempelate_view(request):
    context = {
         "name": "Bibek",
         "age": 21,
         "skills": ["Python","SQL"]
    }
    return render(request, "todos/tempelate_demo.html", context)


def todos_view(request):
    
    if request.method == 'POST':
        form = TodoForm(request.POST)

        if form.is_valid():
            form.save()
            return HttpResponse('Todo successfully created!')
    else:
        form = TodoForm()

    todos = Todo.objects.all()

    return render(request, 'todos/todos.html', {
        'form': form,
        'todos': todos
    })
    

def person_details(request, person_id):
    person = Person.objects.filter(id = person_id).first()
    
    return render(request,'todos/person_details.html', {'person' : person})
    
    
def delete_todo(request , todo_id ):
    todo = Todo.objects.filter(id=todo_id).first()
    todo.delete()
    return HttpResponse('Todo successfully deleted!')


def toggle_todo_done(request, todo_id):
    todo = Todo.objects.filter(id =todo_id).first()
    todo.done = not todo.done
    todo.save()
    return HttpResponse("Todo updated successfully!")
    

def jres(request):
    return JsonResponse(
        {
            "name" : "Bibek",
            "age" : 22
        }
    )
    