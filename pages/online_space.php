<section id="main">
	<div class="project_all_conteiner">
		<?php 
			$projects = R::getAll('SELECT * FROM projects');
			for ($i = 0; $i < count($projects); $i++) {
				$task_user = R::findOne('users', 'id=?', [$projects[$i]['user_id']]);
		?>
				<div id="pr_1" class="project">
					<div class="pr_back"></div>
					<div class="shadow_info">
						<p class="teamlead"><span>TeamLead</span>: <?php echo preg_replace('~^(\S++)\s++(\S)\S++\s++(\S)\S++$~u', '$1 $2.$3.', $task_user['fio'])?></p>
						<p class="text"><span>Описание</span>: <?php echo $projects[$i]['description']?></p>
					</div>
					<div class="pr_title"><?php echo $projects[$i]['name']?></div>
					<?php
						$second_connection =  R::selectDatabase('DB1');
						$task_user = R::findOne('rating', 'id=?', [$projects[$i]['id']]);
					?>
					<div class="likes">
						<p class="like_count"><?php echo $task_user['likes'] ?></p>
						<i class="im im-heart"></i>
					</div>
				</div>
				<?php
					$second_connection = R::selectDatabase('default');
				?>
		<?php
			}
		?>
	</div>
	<div class="project_your_conteiner">
		<?php 
			$projects = R::getAll('SELECT * FROM projects WHERE user_id = '.$_SESSION["logged_user"]['id']);
			for ($i = 0; $i < count($projects); $i++) {
				$task_user = R::findOne('users', 'id=?', [$projects[$i]['user_id']]);
		?>
				<div id="pr_1" class="project">
					<div class="pr_back"></div>
					<div class="shadow_info">
						<p class="teamlead"><span>TeamLead</span>: <?php echo preg_replace('~^(\S++)\s++(\S)\S++\s++(\S)\S++$~u', '$1 $2.$3.', $task_user['fio'])?></p>
						<p class="text"><span>Описание</span>: <?php echo $projects[$i]['description']?></p>
					</div>
					<div class="pr_title"><?php echo $projects[$i]['name']?></div>
					<?php
						$second_connection =  R::selectDatabase('DB1');
						$task_user = R::findOne('rating', 'id=?', [$projects[$i]['id']]);
					?>
					<div class="likes">
						<p class="like_count"><?php echo $task_user['likes'] ?></p>
						<i class="im im-heart"></i>
					</div>
				</div>
				<?php
					$second_connection = R::selectDatabase('default');
				?>
		<?php
			}
		?>
	</div>
	<p class="content_1_themes_type">Проекты: <span>Все</span>/<span>Ваши</span></p> 
	<div class="change_sphere"><i class="im im-external-link"></i></div>
	<div class="log_out"><i class="im im-sign-out"></i></div>
</section>