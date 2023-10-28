package com.npci.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.yaml.snakeyaml.events.Event.ID;

import com.npci.beans.LoanApplicationService;

public interface LoanAplicationDao extends JpaRepository<LoanApplicationService, ID> {

	
}
