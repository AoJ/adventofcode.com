use std::error::Error;
use std::fs::File;
use std::io::prelude::*;
use std::path::Path;

#[allow(unused_must_use)]
fn main() {
		let path = Path::new("day1.dat");

		let mut file = match File::open(&path) {
			Err(why) => panic!("couldn't open {}: {}", path.display(), Error::description(&why)),
			Ok(file) => file
		};

		let mut input = String::new();
		file.read_to_string(&mut input);

		let inc: char = '(' as char;
		let dec: char = ')' as char;

		let mut i = 0;
		let mut sum = 0;
		let mut fold = 0;
		for c in input.chars() {
			if c == inc { sum += 1 }
			if c == dec { sum -= 1 }
			if sum == -1 && fold == 0 { fold = i }
			i += 1;
		}

		println!("{:?}", sum);
		println!("{:?}", fold);

}