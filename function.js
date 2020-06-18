function Add_Employee()
  	{
  		var add=document.getElementById('add_employee');
  		var remove=document.getElementById('remove_employee');
  		var see=document.getElementById('see_employee');
  		var update=document.getElementById('update_employee');
  		var e=document.getElementById("details_employee");
  		var p=document.getElementById("details_products");
  		var s=document.getElementById("details_supplier");
  		e.style.display="block";
  		p.style.display="none";
  		s.style.display="none";
  		if(add.style.display==="none")
  		{
  			add.style.display="block";
  			remove.style.display="none";
  			see.style.display="none";
  			update.style.display="none";
  		}
  		else
  		{
  			add.style.display="block";
  			remove.style.display="none";
  			see.style.display="none";
  			update.style.display="none";
  		}
  	}
  	function Remove_Employee()
  	{
  		var add=document.getElementById('add_employee');
  		var remove=document.getElementById('remove_employee');
  		var see=document.getElementById('see_employee');
  		var update=document.getElementById('update_employee');
  		var e=document.getElementById("details_employee");
  		var p=document.getElementById("details_products");
  		var s=document.getElementById("details_supplier");
  		e.style.display="block";
  		p.style.display="none";
  		s.style.display="none";
  		if(remove.style.display==="none")
  		{
  			remove.style.display="block";
  			add.style.display="none";
  			see.style.display="none";
  			update.style.display="none";
  		}
  		else
  		{
  			remove.style.display="block";
  			add.style.display="none";
  			see.style.display="none";
  			update.style.display="none";
  		}
  	}
  	function See_Employee()
  	{
  		var add=document.getElementById('add_employee');
  		var remove=document.getElementById('remove_employee');
  		var see=document.getElementById('see_employee');
  		var update=document.getElementById('update_employee');
  		var e=document.getElementById("details_employee");
  		var p=document.getElementById("details_products");
  		var s=document.getElementById("details_supplier");
  		e.style.display="block";
  		p.style.display="none";
  		s.style.display="none";
  		if(see.style.display==="none")
  		{
  			see.style.display="block";
  			add.style.display="none";
  			remove.style.display="none";
  			update.style.display="none";
  		}
  		else
  		{
  			see.style.display="block";
  			add.style.display="none";
  			remove.style.display="none";
  			update.style.display="none";
  		}
  	}
  	function Update_Details_Employee()
  	{
  		var add=document.getElementById('add_employee');
  		var remove=document.getElementById('remove_employee');
  		var see=document.getElementById('see_employee');
  		var update=document.getElementById('update_employee');
  		var e=document.getElementById("details_employee");
  		var p=document.getElementById("details_products");
  		var s=document.getElementById("details_supplier");
  		e.style.display="block";
  		p.style.display="none";
  		s.style.display="none";
  		if(remove.style.display==="none")
  		{
  			update.style.display="block";
  			add.style.display="none";
  			remove.style.display="none";
  			see.style.display="none";

  		}
  		else
  		{
  			update.style.display="block";
  			add.style.display="none";
  			remove.style.display="none";
  			see.style.display="none";
  		}
  	}
	// supplier functions are as follows
	function Add_Supplier(){
		var add=document.getElementById('add_supplier');
  		var remove=document.getElementById('remove_supplier');
  		var see=document.getElementById('see_supplier');
  		var update=document.getElementById('update_supplier');
  		var e=document.getElementById("details_employee");
  		var p=document.getElementById("details_products");
  		var s=document.getElementById("details_supplier");
  		s.style.display="block";
  		p.style.display="none";
  		e.style.display="none";
  		if(add.style.display==="none")
  		{
  			add.style.display="block";
  			remove.style.display="none";
  			see.style.display="none";
  			update.style.display="none";
  		}
  		else
  		{
  			add.style.display="block";
  			remove.style.display="none";
  			see.style.display="none";
  			update.style.display="none";
  		}
	
	}
	function Remove_Supplier(){
		var add=document.getElementById('add_supplier');
  		var remove=document.getElementById('remove_supplier');
  		var see=document.getElementById('see_supplier');
  		var update=document.getElementById('update_supplier');
  		var e=document.getElementById("details_employee");
  		var p=document.getElementById("details_products");
  		var s=document.getElementById("details_supplier");
  		s.style.display="block";
  		p.style.display="none";
  		e.style.display="none";
  		if(remove.style.display==="none")
  		{
  			remove.style.display="block";
  			add.style.display="none";
  			see.style.display="none";
  			update.style.display="none";
  		}
  		else
  		{
  			remove.style.display="block";
  			add.style.display="none";
  			see.style.display="none";
  			update.style.display="none";
  		}
	
	}
	function See_Supplier(){
		var add=document.getElementById('add_supplier');
  		var remove=document.getElementById('remove_supplier');
  		var see=document.getElementById('see_supplier');
  		var update=document.getElementById('update_supplier');
  		var e=document.getElementById("details_employee");
  		var p=document.getElementById("details_products");
  		var s=document.getElementById("details_supplier");
  		s.style.display="block";
  		p.style.display="none";
  		e.style.display="none";
  		if(see.style.display==="none")
  		{
  			see.style.display="block";
  			add.style.display="none";
  			remove.style.display="none";
  			update.style.display="none";
  		}
  		else
  		{
  			see.style.display="block";
  			add.style.display="none";
  			remove.style.display="none";
  			update.style.display="none";
  		}
	
	}
	function Update_Details_Supplier()
  	{
  		var add=document.getElementById('add_supplier');
  		var remove=document.getElementById('remove_supplier');
  		var see=document.getElementById('see_supplier');
  		var update=document.getElementById('update_supplier');
  		var e=document.getElementById("details_employee");
  		var p=document.getElementById("details_products");
  		var s=document.getElementById("details_supplier");
  		s.style.display="block";
  		p.style.display="none";
  		e.style.display="none";
  		if(remove.style.display==="none")
  		{
  			update.style.display="block";
  			add.style.display="none";
  			remove.style.display="none";
  			see.style.display="none";

  		}
  		else
  		{
  			update.style.display="block";
  			add.style.display="none";
  			remove.style.display="none";
  			see.style.display="none";
  		}
  	}
  	//products functions are as follows
  	function Add_Products()
  	{
  		var add=document.getElementById('add_products');
  		var remove=document.getElementById('remove_products');
  		var see=document.getElementById('see_products');
  		var update=document.getElementById('update_products');
  		var e=document.getElementById("details_employee");
  		var p=document.getElementById("details_products");
  		var s=document.getElementById("details_supplier");
  		p.style.display="block";
  		s.style.display="none";
  		e.style.display="none";
  		if(add.style.display==="none")
  		{
  			add.style.display="block";
  			remove.style.display="none";
  			see.style.display="none";
  			update.style.display="none";
  		}
  		else
  		{
  			add.style.display="block";
  			remove.style.display="none";
  			see.style.display="none";
  			update.style.display="none";
  		}
  	}
  	function Remove_Products()
  	{
  		var add=document.getElementById('add_products');
  		var remove=document.getElementById('remove_products');
  		var see=document.getElementById('see_products');
  		var update=document.getElementById('update_products');
  		var e=document.getElementById("details_employee");
  		var p=document.getElementById("details_products");
  		var s=document.getElementById("details_supplier");
  		p.style.display="block";
  		s.style.display="none";
  		e.style.display="none";
  		if(remove.style.display==="none")
  		{
  			remove.style.display="block";
  			add.style.display="none";
  			see.style.display="none";
  			update.style.display="none";
  		}
  		else
  		{
  			remove.style.display="block";
  			add.style.display="none";
  			see.style.display="none";
  			update.style.display="none";
  		}
  	}
  	function See_Products()
  	{
  		var add=document.getElementById('add_products');
  		var remove=document.getElementById('remove_products');
  		var see=document.getElementById('see_products');
  		var update=document.getElementById('update_products');
  		var e=document.getElementById("details_employee");
  		var p=document.getElementById("details_products");
  		var s=document.getElementById("details_supplier");
  		p.style.display="block";
  		s.style.display="none";
  		e.style.display="none";
  		if(see.style.display==="none")
  		{
  			see.style.display="block";
  			add.style.display="none";
  			remove.style.display="none";
  			update.style.display="none";
  		}
  		else
  		{
  			see.style.display="block";
  			add.style.display="none";
  			remove.style.display="none";
  			update.style.display="none";
  		}
  	}
  	function Update_Details_Products()
  	{
  		var add=document.getElementById('add_products');
  		var remove=document.getElementById('remove_products');
  		var see=document.getElementById('see_products');
  		var update=document.getElementById('update_products');
  		var e=document.getElementById("details_employee");
  		var p=document.getElementById("details_products");
  		var s=document.getElementById("details_supplier");
  		p.style.display="block";
  		s.style.display="none";
  		e.style.display="none";
  		if(remove.style.display==="none")
  		{
  			update.style.display="block";
  			add.style.display="none";
  			remove.style.display="none";
  			see.style.display="none";

  		}
  		else
  		{
  			update.style.display="block";
  			add.style.display="none";
  			remove.style.display="none";
  			see.style.display="none";
  		}
  	}
    function employee(){
    var a=document.getElementById("employee");
    var b=document.getElementById("supplier");
    var c=document.getElementById("products");
    var d=document.getElementById("details");
    if(a.style.display==="none")
    {
      a.style.display="block";
      b.style.display="none";
      c.style.display="none";
      d.style.display="none";
    }
    else
    {
      a.style.display="block";
    }
  }
  function supplier(){
    var a=document.getElementById("supplier");
    var b=document.getElementById("employee");
    var c=document.getElementById("products");
    var d=document.getElementById("details");
    if(a.style.display==="none")
    {
      a.style.display="block";
      b.style.display="none";
      c.style.display="none";
      d.style.display="none";
    }
    else
    {
      a.style.display="block";
    }
  }
  function products(){
    var a=document.getElementById("products");
    var b=document.getElementById("supplier");
    var c=document.getElementById("employee");
    var d=document.getElementById("details");
    if(a.style.display==="none")
    {
      a.style.display="block";
      b.style.display="none";
      c.style.display="none";
      d.style.display="none";
    }
    else
    {
      a.style.display="block";
    }
  }
  function query(){
    var a=document.getElementById("details");
    var b=document.getElementById("supplier");
    var c=document.getElementById("products");
    var d=document.getElementById("employee");
    if(a.style.display==="none")
    {
      a.style.display="block";
      b.style.display="none";
      c.style.display="none";
      d.style.display="none";
    }
    else
    {
      a.style.display="block";
    }
  }
  function supplier_details(){
    var suppname=getElementById('nameofthesupplier');
    var request_object=new XMLHttpRequest();
    request_object.open("GET",details.php,true)
    request_object.send();
    request_object.onstatechange=function(suppname){
      if(this.onstatechange==4 && status==200)
      {
        getElementById().innerHtml=this.responseText;
      }

    }
  }