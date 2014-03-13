<%@page import="org.apache.tomcat.util.http.Cookies"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>



<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
<% Cookie[] cookies = request.getCookies();
   if(cookies != null) {
	   for(Cookie cookie : cookies) {		   
		   out.println(cookie.getName() + " = " + cookie.getValue() + "<br/>");		   
	   }
   }
   out.flush();
%>
</body>
</html>