package com.devsuperior.dsdeliver.entities.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

	@Query("Select DISTINCT obj from Order obj JOIN FETCH  obj.products "
			+ " where obj.status = 0 Order by obj.moment ASC")
	List<Order> findOrderWithProducts();

}
