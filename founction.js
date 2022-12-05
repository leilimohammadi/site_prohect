function welcome()
{
	alert("  کاربر گرامی خوش آمديد  ");
}

function userInfo()
{
	var uName=document.getElementById("name").value;
	var uFamily=document.getElementById("family").value;
	var fullName=uName+" "+uFamily;
if(uName==""||uFamily=="")
{
alert("کاربر گرامی اطلاعات را کامل وارد کنید");
return;
}
	document.getElementById("curentUser").innerText=fullName+"خوش آمديد ...!";
	document.getElementById("curentUser").style.visibility="visible";
}

function buy()
{
window.alert("خرید شما با موفقیت ثبت گردید");
}

function forget(){
window.alert("ایمیلی حاوی لینک بازیابی رمز عبور برای شما ارسال گردید. لطفا ایمیل خود را چک کنید");
}

function loginsabt()
{
window.alert("اطلاعات شما با موفقیت ثبت گردید و پس از تایید از طریق ایمیل، حساب کاربری شما فعال خواهد شد");
}