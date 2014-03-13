<%@ page contentType="text/html; charset=UTF-8"
	import="java.util.ArrayList"%>

<jsp:include page="checkLogin.jsp" />

<%	
	request.setCharacterEncoding("UTF-8");
	String productname = request.getParameter("product");
	ArrayList<String> list = (ArrayList<String>)session.getAttribute("productlist");

	if(list == null) {
		list = new ArrayList<String>();
	}

	list.add(productname);
	session.setAttribute("productlist", list);
%>

<script>
		alert("<%= productname %> 이(가)추가 되었습니다.!!");
		history.go(-1);
	</script>