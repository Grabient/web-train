package com.mama.filter;

import javax.servlet.*;
import java.io.IOException;

public class CharacterEncodingFilter implements Filter {
    @Override
    //web服务器启动,就已经初始化了,随时等待过滤对象出现!
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("CharacterEncodingFilter初始化");
    }

    //chain 链
   /*
    1.过滤中的所有代码,在过滤特定请求的时候都会执行
    2.必须要让过滤器继续通行
        filterChain.doFilter(servletRequest,servletResponse);
    */

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        servletRequest.setCharacterEncoding("utf-16");
        servletResponse.setCharacterEncoding("utf-16");
        servletResponse.setContentType("text/html;charset=UTF-8");

        System.out.println("CharacterEncodingFilter执行前....");
        filterChain.doFilter(servletRequest,servletResponse); //让我们的请求继续走,如果不写,程序到这里就被拦截停止!
        System.out.println("CharacterEncodingFilter执行后....");
    }

    @Override
    public void destroy() {
        System.out.println("CharacterEncodingFilter销毁");
    }
}
