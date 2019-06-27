import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Look jQuery Animation working in action!';

  public ngOnInit()
  {
    $(document).ready(function(){
      var a = true;
        $("#button").click(function(){
          if(a){
            var div = $("#anim");  
            div.animate({left: '10px'}, "slow");
            div.animate({fontSize: '1.5rem'}, "slow");
            a = false
          }else{
            var div = $("#anim");  
            div.animate({left: '0px'}, "slow");
            div.animate({fontSize: '1rem'}, "slow");  
            a = true;
          }
        });
    });
  }
}
