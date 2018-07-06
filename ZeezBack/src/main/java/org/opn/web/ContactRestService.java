package org.opn.web;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

import java.util.Optional;

import org.opn.dao.ContactRepository;
import org.opn.entities.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*")
@RestController
public class ContactRestService {
	
	@Autowired
	private ContactRepository contactRepository;
	
	/**Recueper tout les contacts
	 * @return
	 */
	@RequestMapping(value="/contacts",method=RequestMethod.GET)
	List<Contact> getAllContact(){
		return contactRepository.findAll();
		
	}
	
	/**
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/contacts/{id}",method=RequestMethod.GET)
	public  Optional<Contact> getContact(@PathVariable Long id){
		return contactRepository.findById(id);
		
	}

	/**
	 * @param c
	 * @return
	 * @throws ParseException 
	 */
	@RequestMapping(value="/contacts",method=RequestMethod.POST)
	public  Contact AddContact(@RequestBody Contact c) throws ParseException{
	return contactRepository.save(c);
		
	}
	
	
	/**
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/contacts/{id}",method=RequestMethod.DELETE)
	public  Boolean deleteContact(@PathVariable Long id){
		contactRepository.deleteById(id);
		return true;
	}

	/**
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/contacts/{id}",method=RequestMethod.PUT)
	public  Contact editContact(@PathVariable Long id,@RequestBody Contact c){
		System.out.println("udpate contact id ==============>"+c.getId()+" "+c.getNom());
		c.setId(id);
		return contactRepository.save(c);
		
	}
	
	/**
	 * @param c
	 * @return
	 * 
	 */
	@RequestMapping(value="/ChercherContacts",method=RequestMethod.GET)
	public  Page<Contact> ChercherContact(@RequestParam(name="mc",defaultValue="") String mc,
									@RequestParam(name="page",defaultValue="0") int page,
									@RequestParam(name="size",defaultValue="5") int size){
	return contactRepository.chercherContact("%"+mc+"%", new PageRequest(page, size));
	}
	
	/** 
	 * GetContactswithPagination
	 * @param page
	 * @param size
	 * @return
	 */
	@RequestMapping(value="/paginationContact",method=RequestMethod.GET)
	public  Page<Contact> paginationContact(@RequestParam(name="page",defaultValue="0") int page,
									        @RequestParam(name="size",defaultValue="5") int size){
	return contactRepository.getPagination(new PageRequest(page, size));
	}
	

}
