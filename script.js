console.log("          _______________________________           ");
console.log("         ||          WPM & CPM           ||         ");
console.log("         ||______________________________||         ");
console.log("         ||-------by Marius Vușcan-------||         ");
console.log("         ||______________________________||         ");
console.log("");
console.log("");

var y="Certainly elsewhere my do allowance at The address farther six hearted hundred towards husband Are securing off occasion remember daughter replying Held that feel his see own yet Strangers ye to he sometimes propriety in She right plate seven has Bed who perceive judgment did marianne Now eldest new tastes plenty mother called misery get Longer excuse for county nor except met its things Narrow enough sex moment desire are Hold who what come that seen read age its Contained or estimable earnestly so perceived Imprudence he in sufficient cultivated Delighted promotion improving acuteness an newspaper offending he Misery in am secure theirs giving an Design on longer thrown oppose am For norland produce age wishing To figure on it spring season up Her provision acuteness had excellent two why intention As called mr needed praise at Assistance imprudence yet sentiments unpleasant expression met surrounded not Be at talked ye though secure nearer";
$(".inc").hide();
var x;
var yy=y.split(/\s/);

function Shuffle(x)
{
    for ( i = 0; i < x.length; i++)
    {
        var j = i + Math.floor((Math.random() * x.length) -i);
        var y = x[j];
        x[j] = x[i];
        x[i] = y;
    }
}

Shuffle(yy);

var wpm,cpm,mistakes;
$("#button").click(function(){
	$("#i1").val(yy);
	wpm=0;
	cpm=0;
	mistakes=0;

	$("#WPM").text(wpm);
	$("#CPM").text(wpm);
	$("#Mistakes").text(mistakes);
	
	$(".start").hide();
	$(".sts").show();
	setTimeout(afterTimer, 60000);	
});

$('#i2').keypress(function(e) {
    if (e.keyCode == 0 || e.keyCode == 32)
	{
		if(($('#i2').val()==yy[0]) || (($('#i2').val())==(" "+yy[0])))
		{
			wpm++;
			cpm=cpm+$("#i2").val().length;
		}
		else
		{
			mistakes++;
		}
		yy.push(yy.shift());//move the first element of yy to end
		$('#i2').val(null);
		$('#i1').val(yy);

    	$("#WPM").text(wpm);
    	$("#CPM").text(cpm);
    	$("#Mistakes").text(mistakes);
    }
});

function afterTimer()
{
	console.log("stop");
	$(".stoph").hide();
	$(".stop").show();
}