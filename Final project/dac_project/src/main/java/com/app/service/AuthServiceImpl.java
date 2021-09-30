
package com.app.service;

import java.io.UnsupportedEncodingException;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.app.dao.IAuthDao;
import com.app.pojos.Customer;

@Service
@Transactional
public class AuthServiceImpl implements IAuthService {
	
	@Autowired
	private JavaMailSender javaMailSender;
	 
	@Autowired
	private IAuthDao authDao; 
	
	


	public AuthServiceImpl(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	
//--------------------------------------------------------------------------------------------------	
	//This method is common for all
	
	@Override
	public void sendMail(Customer user, String URL) {
		try {			
					
	    String subject = "Please verify your registration";
	    String content = "Dear "+ user.getEmail() + ",<br>"
	            + "Please click the link below to verify your registration:<br>"
	            + "<h3><a href="+URL+">VERIFY</a></h3>"
	            + "Thank you.<br>";
			 
			
			MimeMessage message = javaMailSender.createMimeMessage();
		    MimeMessageHelper helper = new MimeMessageHelper(message);
		     
		    try {
				helper.setFrom("gauridummy@gmail.com", "Admin");
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
		    helper.setTo(user.getEmail());
		    helper.setSubject(subject);
		   
		     
		    helper.setText(content, true);
		     
		    javaMailSender.send(message);
			
		} catch (MailException e) {
			e.printStackTrace();
		} catch (MessagingException e) {
			e.printStackTrace();
		}
		
		
	}
	







//---------------------------------------- Change Password -------------------------------------------------
	@Override
	public int changePassword(Customer user) {
		System.out.println(user.getEmail());
		
		return authDao.changePassword(user.getEmail(), user.getPassword());

	}
	














}
