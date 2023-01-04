(function(Global)
{
 "use strict";
 var websharper_test,Forms,Charts,Home,UserDTO,Client,Templating,_websharpertest_Templates,WebSharper,UI,Templating$1,Runtime,Server,ProviderBuilder,Handler,TemplateInstance,Forms$1,Form,Runtime$1,Pervasives,Charting,Renderers,ChartJs,Chart,Seq,Math,List,Operators,Arrays,Pervasives$1,Doc,Concurrency,Remoting,AjaxRemotingProvider,Client$1,Templates;
 websharper_test=Global.websharper_test=Global.websharper_test||{};
 Forms=websharper_test.Forms=websharper_test.Forms||{};
 Charts=Global.Charts=Global.Charts||{};
 Home=websharper_test.Home=websharper_test.Home||{};
 UserDTO=Home.UserDTO=Home.UserDTO||{};
 Client=Home.Client=Home.Client||{};
 Templating=websharper_test.Templating=websharper_test.Templating||{};
 _websharpertest_Templates=Global["websharper-test_Templates"]=Global["websharper-test_Templates"]||{};
 WebSharper=Global.WebSharper;
 UI=WebSharper&&WebSharper.UI;
 Templating$1=UI&&UI.Templating;
 Runtime=Templating$1&&Templating$1.Runtime;
 Server=Runtime&&Runtime.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 Forms$1=WebSharper&&WebSharper.Forms;
 Form=Forms$1&&Forms$1.Form;
 Runtime$1=WebSharper&&WebSharper.Runtime;
 Pervasives=Forms$1&&Forms$1.Pervasives;
 Charting=WebSharper&&WebSharper.Charting;
 Renderers=Charting&&Charting.Renderers;
 ChartJs=Renderers&&Renderers.ChartJs;
 Chart=Charting&&Charting.Chart;
 Seq=WebSharper&&WebSharper.Seq;
 Math=Global.Math;
 List=WebSharper&&WebSharper.List;
 Operators=WebSharper&&WebSharper.Operators;
 Arrays=WebSharper&&WebSharper.Arrays;
 Pervasives$1=Charting&&Charting.Pervasives;
 Doc=UI&&UI.Doc;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Remoting=WebSharper&&WebSharper.Remoting;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 Client$1=UI&&UI.Client;
 Templates=Client$1&&Client$1.Templates;
 Forms.CustomerInformation$40$28=function(submitter)
 {
  return function()
  {
   submitter.Trigger();
  };
 };
 Forms.CustomerInformation=function()
 {
  function r(name,email,street,city,country,zip,cc,submitter)
  {
   var b,t,_this,_this$1,_this$2,_this$3,_this$4,_this$5,_this$6,p,i;
   return(b=(t=(_this=(_this$1=(_this$2=(_this$3=(_this$4=(_this$5=(_this$6=new ProviderBuilder.New$1(),(_this$6.h.push({
    $:10,
    $0:"name",
    $1:name
   }),_this$6)),(_this$5.h.push({
    $:10,
    $0:"email",
    $1:email
   }),_this$5)),(_this$4.h.push({
    $:10,
    $0:"street",
    $1:street
   }),_this$4)),(_this$3.h.push({
    $:10,
    $0:"city",
    $1:city
   }),_this$3)),(_this$2.h.push({
    $:10,
    $0:"country",
    $1:country
   }),_this$2)),(_this$1.h.push({
    $:10,
    $0:"zip",
    $1:zip
   }),_this$1)),(_this.h.push({
    $:10,
    $0:"creditcard",
    $1:cc
   }),_this)),(t.h.push(Handler.EventQ2(t.k,"submit",function()
   {
    return t.i;
   },function()
   {
    submitter.Trigger();
   })),t)),(p=Handler.CompleteHoles(b.k,b.h,[["name",0,null],["email",0,null],["street",0,null],["city",0,null],["country",0,null],["zip",0,null],["creditcard",0,null]]),(i=new TemplateInstance.New(p[1],_websharpertest_Templates.checkoutform(p[0])),b.i=i,i))).get_Doc();
  }
  return Form.Render(Runtime$1.Curried(r,8),Form.Run(function(data)
  {
   Global.alert("You submitted: "+Global.String(data));
  },Form.WithSubmit(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Form.Return(Runtime$1.Curried(function(name,email,street,city,country,zip,cc)
  {
   return[name,email,street,city,country,zip,cc];
  },7)),Form.Yield("")),Form.Yield("")),Form.Yield("")),Form.Yield("")),Form.Yield("")),Form.Yield("")),Form.Yield("")))));
 };
 Charts.Chart02=function()
 {
  return ChartJs.Render$8(Chart.Line$1(Seq.map(function(x)
  {
   return[Math.abs(x-0.1)<0.1?"0":"",Math.sin(x)/2/x];
  },List.ofSeq(Operators.step(-5*3.141592653589793,0.1,5*3.141592653589793)))),{
   $:1,
   $0:{
    $:0,
    $0:400,
    $1:300
   }
  },null,null);
 };
 Charts.Chart01=function()
 {
  var labels;
  labels=["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"];
  return ChartJs.Render(Chart.Combine([Chart.Radar$1(Arrays.zip(labels,[28,48,40,19,96,27,100])).__WithTitle("Day 1").__WithFillColor(new Pervasives$1.Color({
   $:0,
   $0:151,
   $1:187,
   $2:205,
   $3:0.2
  })).__WithStrokeColor(new Pervasives$1.Color({
   $:2,
   $0:"blue"
  })).__WithPointColor(new Pervasives$1.Color({
   $:2,
   $0:"darkblue"
  })),Chart.Radar$1(Arrays.zip(labels,[65,59,90,81,56,55,40])).__WithTitle("Day 2").__WithFillColor(new Pervasives$1.Color({
   $:0,
   $0:220,
   $1:220,
   $2:220,
   $3:0.2
  })).__WithStrokeColor(new Pervasives$1.Color({
   $:2,
   $0:"green"
  })).__WithPointColor(new Pervasives$1.Color({
   $:2,
   $0:"darkgreen"
  }))]),{
   $:1,
   $0:{
    $:0,
    $0:400,
    $1:300
   }
  },null,null);
 };
 UserDTO.New=function(FirstName,LastName,PhoneNumber,Email)
 {
  return{
   FirstName:FirstName,
   LastName:LastName,
   PhoneNumber:PhoneNumber,
   Email:Email
  };
 };
 Client.UserTable=function()
 {
  var b,R,_,_this,p,i;
  function renderUserRow(user)
  {
   var _this$1,_this$2,_this$3,_this$4;
   _this$1=(_this$2=(_this$3=(_this$4=new ProviderBuilder.New$1(),(_this$4.h.push({
    $:1,
    $0:"firstname",
    $1:user.FirstName
   }),_this$4)),(_this$3.h.push({
    $:1,
    $0:"lastname",
    $1:user.LastName
   }),_this$3)),(_this$2.h.push({
    $:1,
    $0:"phonenumber",
    $1:user.PhoneNumber
   }),_this$2));
   _this$1.h.push({
    $:1,
    $0:"email",
    $1:user.Email
   });
   return _this$1;
  }
  return(b=(R=Doc.Async((_=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("websharper-test:websharper_test.Home+Server.FetchUsers:490899294",[]),function(a)
   {
    return Concurrency.Return(Doc.Concat(List.map(function(user)
    {
     var b$1,p$1,i$1;
     return(b$1=renderUserRow(user),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],_websharpertest_Templates.userrow(p$1[0])),b$1.i=i$1,i$1))).get_Doc();
    },a)));
   });
  }))),(_this=new ProviderBuilder.New$1(),(_this.h.push({
   $:0,
   $0:"rows",
   $1:R
  }),_this))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],_websharpertest_Templates.usertable(p[0])),b.i=i,i))).get_Doc();
 };
 Templating.Main$34$25=function()
 {
  return function()
  {
   Global.alert("Add a nice popup here...");
  };
 };
 _websharpertest_Templates.checkoutform=function(h)
 {
  Templates.LoadLocalTemplates("main");
  return h?Templates.NamedTemplate("main",{
   $:1,
   $0:"checkoutform"
  },h):void 0;
 };
 _websharpertest_Templates.usertable=function(h)
 {
  Templates.LoadLocalTemplates("main");
  return h?Templates.NamedTemplate("main",{
   $:1,
   $0:"usertable"
  },h):void 0;
 };
 _websharpertest_Templates.userrow=function(h)
 {
  Templates.LoadLocalTemplates("main");
  return h?Templates.NamedTemplate("main",{
   $:1,
   $0:"userrow"
  },h):void 0;
 };
}(self));
