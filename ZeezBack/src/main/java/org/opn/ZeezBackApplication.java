package org.opn;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.opn.dao.ContactRepository;
import org.opn.entities.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ZeezBackApplication implements CommandLineRunner{
	
	@Autowired
	private  ContactRepository contactRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(ZeezBackApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		DateFormat df=new SimpleDateFormat("dd/MM/yyyy");
   contactRepository.save(new Contact("yassine","Tahiri",df.parse("20/12/1990"),"yassine.tahiri08@gmail.com",062563312,""));
   contactRepository.save(new Contact("Ayman","Serhani",df.parse("25/05/1995"),"Ayman.Serhani@gmail.com",065563313,""));
   contactRepository.save(new Contact("Mustapha","Hejji",df.parse("02/08/1993"),"mus.hajji@gmail.com",070563312,""));
   contactRepository.save(new Contact("Emmanuel","Macron",df.parse("01/11/1997"),"Emmanu.mac@gmail.com",07056330,""));
   contactRepository.save(new Contact("Najat","Aatabou",df.parse("13/10/1990"),"najat.atabou@gmail.com",06056350,""));
   contactRepository.findAll().forEach(c->{
	   System.out.println(c.getNom()+" "+c.getPrenom());
	   });
	}
}
