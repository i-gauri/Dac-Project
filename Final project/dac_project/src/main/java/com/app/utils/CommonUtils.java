package com.app.utils;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;

@Component
public class CommonUtils {
	
	@Autowired
	Environment env;
	public int validatetoken(HttpServletRequest request) throws Exception {
		try {
			String []arr=request.getHeader("authorization").split("Bearer ");
			Claims claims= Jwts.parser().setSigningKey(env.getProperty("salt")).parseClaimsJws(arr[1]).getBody();
			return (int) claims.get("entity");
		}catch (ExpiredJwtException ex) {
			throw new Exception("Session Expired!");
		}catch(Exception e) {
			throw new Exception("Invalic access token");
		}
	}
}