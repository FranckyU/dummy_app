(function(a){var b;a.filters=b={append:function(b,c,d,e,f,g,h){var i="filters["+c+"]["+h+"][value]",j="filters["+c+"]["+h+"][operator]";switch(d){case"boolean":var k='<select class="span3 " name="'+i+'">'+'<option value="_discard">...</option>'+'<option value="true"'+(e=="true"?'selected="selected"':"")+">True</option>"+'<option value="false"'+(e=="false"?'selected="selected"':"")+">False</option>"+'<option disabled="disabled">---------</option>'+"<option "+(e=="_present"?'selected="selected"':"")+' value="_present">Is present</option>'+"<option "+(e=="_blank"?'selected="selected"':"")+' value="_blank"  >Is blank</option>'+"</select>";break;case"date":case"datetime":case"timestamp":var k='<select class="switch-additionnal-fieldsets span3 " name="'+j+'">'+'<option data-additional-fieldset="false" value="_discard">...</option>'+'<option data-additional-fieldset="false"'+(f=="today"?'selected="selected"':"")+' value="today">Today</option>'+'<option data-additional-fieldset="false"'+(f=="yesterday"?'selected="selected"':"")+' value="yesterday">Yesterday</option>'+'<option data-additional-fieldset="false"'+(f=="this_week"?'selected="selected"':"")+' value="this_week">This week</option>'+'<option data-additional-fieldset="false"'+(f=="last_week"?'selected="selected"':"")+' value="last_week">Last week</option>'+'<option data-additional-fieldset="true" '+(f=="less_than"?'selected="selected"':"")+' value="less_than">Less than ... days ago</option>'+'<option data-additional-fieldset="true" '+(f=="more_than"?'selected="selected"':"")+' value="more_than">More than ... days ago</option>'+'<option disabled="disabled">---------</option>'+'<option data-additional-fieldset="false"'+(f=="_present"?'selected="selected"':"")+' value="_present">Is present</option>'+'<option data-additional-fieldset="false"'+(f=="_blank"?'selected="selected"':"")+' value="_blank" >Is blank</option>'+"</select>",l='<input class="additional-fieldset span2 " style="display:'+(f=="less_than"||f=="more_than"?"block":"none")+';" type="text" name="'+i+'" value="'+e+'" /> ';break;case"enum":g=$j("<div/>").html(g).text();var k='<select name="'+i+'" class="span3 ">'+'<option value="_discard">...</option>'+g+'<option disabled="disabled">---------</option>'+"<option "+(e=="_present"?'selected="selected"':"")+' value="_present">Is present</option>'+"<option "+(e=="_blank"?'selected="selected"':"")+' value="_blank"  >Is blank</option>'+"</select>";break;case"string":case"text":case"belongs_to_association":var k='<select class="switch-additionnal-fieldsets span3 " value="'+f+'" name="'+j+'">'+'<option data-additional-fieldset="true"'+(f=="like"?'selected="selected"':"")+' value="like">Contains</option>'+'<option data-additional-fieldset="true"'+(f=="is"?'selected="selected"':"")+' value="is">Is exactly</option>'+'<option data-additional-fieldset="true"'+(f=="starts_with"?'selected="selected"':"")+' value="starts_with">Starts with</option>'+'<option data-additional-fieldset="true"'+(f=="ends_with"?'selected="selected"':"")+' value="ends_with">Ends with</option>'+'<option disabled="disabled">---------</option>'+'<option data-additional-fieldset="false"'+(f=="_present"?'selected="selected"':"")+' value="_present">Is present</option>'+'<option data-additional-fieldset="false"'+(f=="_blank"?'selected="selected"':"")+' value="_blank">Is blank</option>'+"</select>",l='<input class="additional-fieldset span2" style="display:'+(f=="_blank"||f=="_present"?"none":"block")+';" type="text" name="'+i+'" value="'+e+'" /> ';break;default:var k='<input class="span2" type="text" name="'+i+'" value="'+e+'"/> '}a("#filters_box").append('<div class="row filter clearfix"><span class="span3"><span data-original-title="Click to remove this filter" rel="twipsy" class="btn info delete" data-disabler-name="filters['+c+"]["+h+'][disabled]">'+b+"</span>"+"</span>"+'<span class="span3">'+k+"</span>"+(l?'<span class="span2">'+l+"</span>":"")+"</div>")}},a("#filters a").live("click",function(){a.filters.append(a(this).data("field-label"),a(this).data("field-name"),a(this).data("field-type"),a(this).data("field-value"),a(this).data("field-operator"),a(this).data("field-options"),a.now()),a("[rel=twipsy]").twipsy()}),a("#filters_box .delete").live("click",function(){a(this).parents(".filter").hide(),a(this).append('<input type="hidden" name="'+a(this).data("disabler-name")+'" value="true" />')}),a("#filters_box .switch-additionnal-fieldsets").live("change",function(){var b=a(this).find("option:selected");a(b).data("additional-fieldset")?(a(this).parent().siblings().children(".additional-fieldset").val(""),a(this).parent().siblings().children(".additional-fieldset").show()):a(this).parent().siblings().children(".additional-fieldset").hide()})})(jQuery)