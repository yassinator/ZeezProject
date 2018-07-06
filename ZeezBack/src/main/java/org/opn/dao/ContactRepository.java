package org.opn.dao;

import org.opn.entities.Contact;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
 
public interface ContactRepository extends JpaRepository<Contact, Long>{
	@Query("select c from Contact c where c.nom like :x")
	public  Page<Contact> chercherContact(@Param("x")String nom,Pageable p);
	
	@Query("select c from Contact c")
	public  Page<Contact> getPagination(Pageable p);
	

}
