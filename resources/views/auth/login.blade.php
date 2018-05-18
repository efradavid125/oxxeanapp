@extends('layouts.app')

@section('content')
<div class="container">

    <div class="row">
    <div class="col s12 ">
      <div class="card grey lighten-5">
        <form class="col s12" method="POST" action="{{ route('login') }}">
        <div class="card-content black-text">
          <span class="card-title">{{ __('auth.Login') }}</span>
            <div class="row">
                
                    @csrf

                    <div class="row">
                        <div class="input-field col s12">
                          <input id="email" name="email" type="email" class="validate">
                          <label for="email">{{ __('auth.E-Mail-Address') }}</label>
                        </div>

                        <div class="input-field col s12">
                          <input id="password" name="password" type="password" class="validate">
                          <label for="password">{{ __('auth.password') }}</label>
                          <p>
                              <label>
                                <input type="checkbox" name="remember" />
                                <span>{{ __('auth.Remember-Me') }}</span>
                              </label>
                            </p>
                        </div>
                    </div>
                
            </div>
        </div>
        <div class="card-action">
            <button type="submit" class="btn btn-primary">
                {{ __('auth.Login') }}
            </button>
            <a class="btn btn-link" href="{{ route('password.request') }}">
                {{ __('auth.Forgot-Your-Password') }}
            </a>
        </div>
        </form>
      </div>
    </div>
  </div>

    <div class="row justify-content-center">


        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('auth.Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="email" class="col-sm-4 col-form-label text-md-right">{{ __('auth.E-Mail-Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('auth.password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> {{ __('auth.Remember-Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('auth.Login') }}
                                </button>

                                <a class="btn btn-link" href="{{ route('password.request') }}">
                                    {{ __('auth.Forgot-Your-Password') }}
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
