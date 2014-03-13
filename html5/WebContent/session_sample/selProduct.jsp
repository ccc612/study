<%@ page contentType="text/html; charset=UTF-8"%>

<%
	request.setCharacterEncoding("UTF-8");

	String username = "";
	String passwd = "";

	if(request.getMethod().equals("POST")) {	
		username = request.getParameter("username");
		passwd = request.getParameter("passwd");
		
		if(username != null && passwd != null && 
				username.equals("longlee") && passwd.equals("1234")) {
			session.setAttribute("username", username);
		}
		else {
			out.println("<script>location.href='login.jsp'</script>");
		}
	}
	else {
%>
<jsp:include page="checkLogin.jsp" />
<%
	}
%>

<!DOCTYPE html>

<html>
<head>
<meta charset="UTF-8">
<title>selProduct.jsp</title>
<style>
body {
	margin: 0 auto;
	text-align: center;
}
</style>
</head>

<body>
	<H2>상품선택</H2>
	<HR>
	<%= session.getAttribute("username") %>님이 로그인 한 상태 입니다.
	<HR>

	<form name="form1" method="POST" action="add.jsp">
		<SELECT name="product">
			<option>사과</option>
			<option>귤</option>
			<option>파인애플</option>
			<option>자몽</option>
			<option>레몬</option>
		</SELECT> <input type="submit" value="추가" />
	</form>

	<a href="checkOut.jsp">계산</a>
</body>
</html>








