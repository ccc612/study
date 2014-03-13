<%@ page contentType="text/html; charset=UTF-8"
	import="java.util.ArrayList"%>

<jsp:include page="checkLogin.jsp" />

<!DOCTYPE html>

<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
body {
	margin: 0 auto;
	text-align: center;
}
</style>
</head>

<body>

	<H2>계산</H2>
	선택한 상품 목록
	<HR />

	<%
	ArrayList<String> list = (ArrayList<String>)session.getAttribute("productlist");

	if(list == null) {
		out.println("선택한 상품이 없습니다.!!!");
	}
	else {
		for(Object productname:list) {
			out.println(productname+"<BR>");
		}
		
		session.setAttribute("productlist", null);
	}	
%>
	<hr />
	<a href="selProduct.jsp">돌아가기</a> /
	<a href="logout.jsp">로그아웃</a>

</body>
</html>














