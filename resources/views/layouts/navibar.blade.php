<nav class="navbar navbar-expand-md navbar-dark bg-primary shadow-sm" >  
  <div class="container-fluid">
    <a class="navbar-brand" href="{{ url('/') }}">
      {{ config('app.name', 'Laravel') }}
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="/home">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dev
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/cms_posts">CmsPosts</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="/test_mail/test">maiTest</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="/test_pdf/test">pdfTest</a></li>
          </ul>
        </li>        
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Master
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/category">Category</a></li>
            <li><a class="dropdown-item" href="/tags">Tags</a></li>
          </ul>
        </li>        
        <li class="nav-item">
          <a class="nav-link active" href="/tasks">Task</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/books">Book</a>
        </li>
      </ul>
      <ul class="navbar-nav mb-2 mb-lg-0">
      @if (session('normal_user'))
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="/logout" onclick="event.preventDefault();
                document.getElementById('logout-form').submit();">{{ __('Logout') }}
              </a>
              <form id="logout-form" action="/logout" method="POST" style="display: none;">
                @csrf
              </form>
            </li>
          </ul>
        </li>
      @else
        <li class="nav-item">
          <a class="nav-link active" href="/login">{{ __('Login') }}</a>
        </li> 
        <li class="nav-item">
          <a class="nav-link active" href="/register">{{ __('Register') }}</a>
        </li>
      @endif          
      </ul>                
    </div>

  </div><!-- end_container -->
</nav>
