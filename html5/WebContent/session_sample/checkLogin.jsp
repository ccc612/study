<%@ page contentType="text/html; charset=UTF-8"%>

<%
	String username = (String)(session.getAttribute("username"));

	if(username == null || username.equals("")) {
		out.println("<script>location.href='login.jsp'</script>");
	}
%>