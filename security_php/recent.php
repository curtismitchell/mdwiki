<?

/////////////////////////////////////
// MDWiki Recent File Module       //
//                         V 1.0   //
//                    Taemin Lee   //
//            persuade@gmail.com   //
/////////////////////////////////////

$max_item = 5;

$path = $_SERVER[DOCUMENT_ROOT];

$d = dir($path);

$files = array();

while (false !== ($entry = $d->read())) {
  $filepath = "{$path}/{$entry}";
  if(strpos($entry, ".md") == false) continue;
  $tokens = explode(" ", $entry);

  if(sizeof($tokens) > 1 && is_numeric($tokens[1]))
  {
	  $files[$entry] = array();
	  $files[$entry]["ctime"] = $tokens[1];
	  $files[$entry]["mtime"] = filemtime($filepath);
  }
}

$clist = array_slice(aasort($files, 'ctime'),0,$max_item); // Sort by creation time
$mlist = array_slice(aasort($files, 'mtime'),0,$max_item); // Sort by modification time

// function from http://stackoverflow.com/questions/2699086/sort-multi-dimensional-array-by-value with some changes
function aasort ($array, $key) {
    $sorter=array();
    $ret=array();
    reset($array);
    foreach ($array as $ii => $va) {
        $sorter[$ii]=$va[$key];
    }
    arsort($sorter);
    foreach ($sorter as $ii => $va) {
        $ret[$ii]=$array[$ii];
    }
    return $ret;
}

echo "<div class='col-md-6'>";
echo "<h3>최근 추가 문서</h3>";
echo "<ul>";
foreach($clist as $k => $v)
{
	echo "<li><a href='?{k}'>{$k}</a></li>";
}
echo "</ul>";
echo "</div>";

echo "<div class='col-md-6'>";
echo "<h3>최근 수정 문서</h3>";
echo "<ul>";
foreach($mlist as $k => $v)
{
	echo "<li><a href='?{$k}'>{$k}</a></li>";
}
echo "</ul>";
echo "</div>";
?>