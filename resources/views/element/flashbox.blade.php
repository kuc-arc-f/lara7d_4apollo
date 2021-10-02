
<div class="flashbox_wrap">
	@if (session('flash_message_success'))
	<div class="flash_message bg-success text-center py-3 my-0" id="flash_message">
		{{ session('flash_message_success') }}
	</div>
	@endif   
	@if (session('flash_message_error'))
	<div class="flash_message bg-danger text-center py-3 my-0" id="flash_message">
		{{ session('flash_message_error') }}
	</div>
	@endif   
</div>
<!-- -->
<style>
  .flashbox_wrap{ color: white; }
</style>
