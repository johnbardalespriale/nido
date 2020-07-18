import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'jqueryui'

@Component({
  selector: 'app-contabilidad-numerica',
  templateUrl: './contabilidad-numerica.component.html',
  styleUrls: ['./contabilidad-numerica.component.sass']
})
export class ContabilidadNumericaComponent implements OnInit {
  nivels:any[];
  selectedNivel: string;
  habilitar: number;
  javascript(){
    $('.anchor').on('click',function(){
      var width = parseInt($(this).parent().css('width'));
      if(width==10){
        $(this).parent().css('width','20%');
        $('#canvas').css('width','60%');
      }else{
         $(this).parent().css('width','10px');
        $('#canvas').css('width','calc( 80% - 10px)');
      }
   });
   
   (<any>$('.ui-item')).draggable({
     drag: function( event, ui ) {
              var lines = $(this).data('lines');
              var con_item =$(this).data('connected-item');
              var con_lines = $(this).data('connected-lines');
   
              if(lines) {
                lines.forEach(function(line,id){
                       $(line).attr('x1',$(this).position().left).attr('y1',$(this).position().top+1);  
                }.bind(this));
              }
   
              if(con_lines){
                  con_lines.forEach(function(con_line,id){
                     $(con_line).attr('x2',$(this).position().left)
                           .attr('y2',$(this).position().top+(parseInt($(this).css('height'))/2)+(id*5));
                  }.bind(this));
   
              }
   
          }
   });
   
   (<any>$('.ui-item')).droppable({
     accept: '.con_anchor',
     drop: function(event,ui){
        var item = ui.draggable.closest('.ui-item');
        $(this).data('connected-item',item);
        ui.draggable.css({top:-2,left:-2});
        item.data('lines').push(item.data('line'));
   
        if($(this).data('connected-lines')){
           $(this).data('connected-lines').push(item.data('line'));
   
            var y2_ = parseInt(item.data('line').attr('y2'));
            item.data('line').attr('y2',y2_+$(this).data('connected-lines').length*5);
   
        }else $(this).data('connected-lines',[item.data('line')]);
   
        item.data('line',null);
       console.log('dropped');
     }
   });
   
   
   (<any>$('.con_anchor')).draggable({drag: function( event, ui ) {
        var _end = $(event.target).parent().position();
        var end = $(event.target).position();
        if(_end&&end)  
        $(event.target).parent().data('line')
        .attr('x2',end.left+_end.left+5).attr('y2',end.top+_end.top+2);
   },stop: function(event,ui) {
           if(!ui.helper.closest('.ui-item').data('line')) return;
           ui.helper.css({top:-2,left:-2});
           ui.helper.closest('.ui-item').data('line').remove();
           ui.helper.closest('.ui-item').data('line',null);
           console.log('stopped');
         }
   });
   
   
   $('.con_anchor').on('mousedown',function(e){
       var cur_ui_item = $(this).closest('.ui-item');
       var connector = $('#connector_canvas');
       var cur_con;
   
     if(!$(cur_ui_item).data('lines')) $(cur_ui_item).data('lines',[]);
   
     if(!$(cur_ui_item).data('line')){
            cur_con = $(document.createElementNS('http://www.w3.org/2000/svg','line'));
            cur_ui_item.data('line',cur_con);
       } else cur_con = cur_ui_item.data('line');
   
       connector.append(cur_con);
       var start = cur_ui_item.position();
        cur_con.attr('x1',start.left+200).attr('y1',start.top+33);
        cur_con.attr('x2',start.left+200).attr('y2',start.top+33);
   });
  }
  
  answer: number;
  constructor() { 
   this.answer = 0;
  }

  ngOnInit(): void {
    this.nivels = [
      {nivel:'Nivel 1', selected: false}, 
      {nivel:'Nivel 2', selected: false}, 
      {nivel:'Nivel 3', selected: false}
    ];
    
  }

  match(number){
    this.answer = number;
    console.log("respuesta", this.answer);
  }

  matchCorrect(answer){
    console.log("respuesta", answer);
    if(this.answer === answer){
      alert("Respuesta correcta");
    }else if(this.answer != 0){
      alert("Respuesta erronea, vuelva a 'iniciar el juego'");
    }
  }

  errorChoice(){
    alert("Respuesta errónea");
  }

  correctChoice(id){
    alert("Respuesta correcta");
    var numbers = document.getElementById(id);
    numbers.style.pointerEvents = "none";
    numbers.style.opacity = "0.3";
  }

  resetear(show){
    if(show === 'Nivel 1'){
      this.habilitar = 1;
    }else if(show === 'Nivel 2'){
      this.habilitar = 0;
      setTimeout(() => {
        this.habilitar = 2;
       }, 500);
      setTimeout(() => {
        this.javascript()
       }, 1000);
    } else {
      this.habilitar = 3;
    }
  }

}
