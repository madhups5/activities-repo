package com.npci.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npci.beans.Customer;
import com.npci.beans.Loan;
import com.npci.beans.LoanApplicationService;
import com.npci.dao.LoanAplicationDao;
import com.npci.exceptions.LoanApplicationNotFoundException;

@Service
public class LoanServiceImpl implements LoanService {
	
	@Autowired
	private LoanAplicationDao loandao;
	

	@Override
	public List<LoanApplicationService> viewLoans() {
		return loandao.findAll();
	}

	@Override
	public LoanApplicationService applyLoan(Customer customer,Loan loan) {
		LoanApplicationService service=new LoanApplicationService();
		service.setCustomer_id(customer);
		service.setLoan_id(loan);
		loan.setLoan_type("HouseLoan");
		return loandao.save(service);
		
	}

	@Override
	public String loanStatus(int loan_id) {
		LoanApplicationService application=loandao.findById(loan_id)
		if(application!=null)
		{
			return application.getStatus();
		}
		throw new LoanApplicationNotFoundException("Loan Application with this"+loan_id+"Not Found");
		}

}
