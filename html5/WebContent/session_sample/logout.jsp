<%@ page contentType="text/html; charset=UTF-8"%>

<%
	session.invalidate();
	out.println("<script>location.href='login.jsp'</script>");
%>