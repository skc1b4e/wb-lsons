var myObj =
{
	init:function()
	{
        var that = this;
		this.load_country();
		document.getElementById('country').addEventListener('change',function()
			{
             var e = document.getElementById("country");
             var strCtry = e.options[e.selectedIndex].value;                
			that.load_state(strCtry);
			});
		document.getElementById('state').addEventListener('change',function()
			{
                var e = document.getElementById("country");
                var strCtry = e.options[e.selectedIndex].value;
                var f = document.getElementById("state");
                var strState= f.options[f.selectedIndex].value;
			that.load_city(strCtry,strState);
			});		

	},
	load_country:function()
	{
		var xhr = new XMLHttpRequest();
		
    	xhr.open('GET','https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json',true);
    
        
		xhr.onload = function()
		{
			var countries = JSON.parse(xhr.responseText);
			countries.forEach(function(value)
				{
					var op = document.createElement('option');
					op.innerText = value.name;
					op.setAttribute('value',value.id);
					document.getElementById('country').appendChild(op);
					
				
				});
				
		}
        xhr.setRequestHeader('Accept', 'application/json');
		xhr.send();
	},
	load_state:function(id)
		{
		document.getElementById('state').innerHTML = '';
			var op = document.createElement('option');
					op.innerText = "Select state";
					op.setAttribute('value',0);
					document.getElementById('state').appendChild(op);
		var xhr = new XMLHttpRequest();
		
        xhr.open('GET','https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json',true);
        
       
		xhr.onload = function()
		{
			var countries = JSON.parse(xhr.responseText);
        
			countries.forEach(function(value)
				{
                  
                    if(id==value.country_id){
                      
					var op = document.createElement('option');
					op.innerText = value.name;
					op.setAttribute('value',value.id);
					document.getElementById('state').appendChild(op);
                        }
				
				});
				
		}
        xhr.setRequestHeader('Accept', 'application/json');
		xhr.send();
	},
	load_city:function(country_id,id)
		{
		document.getElementById('city').innerHTML = '';
		var op = document.createElement('option');
				op.innerText = "Select city";
				op.setAttribute('value',0);
				document.getElementById('city').appendChild(op);
		var xhr = new XMLHttpRequest();
		
        xhr.open('GET','https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json',true);
		xhr.onload = function()
		{
			var countries = JSON.parse(xhr.responseText);
			countries.forEach(function(value)
				{
                    if(id==value.state_id && country_id==value.country_id){
					var op = document.createElement('option');
					op.innerText = value.name;
					op.setAttribute('value',value.id);
					document.getElementById('city').appendChild(op);
                    }
					
				
				});
				
		}
        xhr.setRequestHeader('Accept', 'application/json');
		xhr.send();
	}		
}
myObj.init();
	
			
			