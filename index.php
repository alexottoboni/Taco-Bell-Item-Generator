<?php

$prefixes = file('./assets/prefixes.txt');
$items = file('./assets/items.txt');
$suffix = file('./assets/suffix.txt');
?>

<head>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap-theme.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
</head>

<body>
	<div class="stuffa">
	<div class="jumbotron">
		<h1 class="text-center">
			<?php
			echo $prefixes[array_rand($prefixes)];
			echo $items[array_rand($items)];
			echo $suffix[array_rand($suffix)];
			?>
		</h1>
	</div>
	<input type="submit" class="btn btn-lg center-block btn-success" onClick="history.go(0)" name="Generate" value="Generate">
	
	</div>
</body>
