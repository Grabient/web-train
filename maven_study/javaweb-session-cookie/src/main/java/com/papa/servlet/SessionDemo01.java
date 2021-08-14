package com.papa.servlet;

import com.papa.pojo.Person;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class SessionDemo01 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        //解决乱码问题
        resp.setCharacterEncoding("utf-16");
        req.setCharacterEncoding("utf-16");
        resp.setContentType("text/html;charset= utf-16");

        //得到session
        HttpSession session = req.getSession();

        //给session中存东西
        session.setAttribute("name",new Person("成龙",19));

        //获取session的ID
        String sessionId = session.getId();

        //判断session是不是新创建的
        if(session.isNew()){
            resp.getWriter().write("session创建成功,ID:"+sessionId);
        }else{
            resp.getWriter().write(("session已经创建了,ID:" + sessionId));
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
